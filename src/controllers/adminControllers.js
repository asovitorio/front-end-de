const jwt = require("jsonwebtoken");
const api = require("../api/endpoind");

const adminControllers = {
  password: (req, res) => {
    try {
      const { token } = req.params;
      const decode = jwt.decode(token);
      if (!decode) null;
      const { id, name, email } = decode;
      const user = { id, name, email };
      return res.render("admin/password", { user, token });
    } catch (error) {
      return res.render("error", { error, message: "token invalid" });
    }
  },
  login: async (req, res) => {
    try {
      const { token } = await (await api.post("/auth", req.body)).data;
      const user = jwt.decode(token);

      req.session.token = token;

      return res.redirect("/admin/home");
    } catch (error) {
      const msg = {
        message: "Usuário ou senha invalido!",
        title: "Erro:401",
        local: "login",
      };
      return res.render("pages/login", { msg });
    }
  },
  createVideos: async (req, res) => {
    try {
        const token = req.token
        console.log(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { title, members, link, description, duration } = req.body;

      const episode = await (
        await api.post(
          "/episodes",
          { title, members, link, description, duration, type: "mp4" },
          config
        )
      ).data;
      req.flash('video-create', true)
      return res.redirect('/admin/create/videos');
    } catch (error) {
        const msg = false;
        return res.redirect('/admin/create/videos');
    }
  },
  update: async (req, res) => {
    try {
      const msg = false;
      const { token, id, password } = req.body;
      const user = { id, password };
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await api.put(
        "/users",
        {
          id,
          password,
        },
        config
      );

      return res.render("pages/login", { msg });
    } catch (error) {
      res.send("erro token invalid    " + error);
    }
  },
};

module.exports = adminControllers;
