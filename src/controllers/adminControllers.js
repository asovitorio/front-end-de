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
      const token = req.token;
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
      req.flash("video-create", true);
      return res.redirect("/admin/create/videos");
    } catch (error) {
      const msg = false;
      return res.redirect("/admin/create/videos");
    }
  },
  updateUser: async (req, res) => {
    const token = req.session.token;
    const { id, status, member_id } = req.body;
    const user = {
      id,
      password: "",
      status,
    };
    if(!status) return res.redirect(`/admin/view/member/${member_id}`);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.put("/users", user, config);
    return res.redirect(`/admin/view/member/${member_id}`);
  },
  resetPassUser: async (req, res) => {
    const token = req.session.token;
    const { id, status, member_id, isUser } = req.body;
    const user = {
      member_id,
      isUser,
      status,
    };
    if(!status) return res.redirect(`/admin/view/member/${member_id}`);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await api.delete(
      `/users/${id}`,

      config
    );

   

      const { data:userCreate } = await api.post(
        "/users",
        user,
        config
      );
    //  console.log(userCreate,userDel);
       return res.redirect(`/admin/view/member/${member_id}`)
  },
  createUser: async (req,res) =>{
    const token = req.session.token;
    const {status, member_id, isUser } = req.body;
    try {
     
      const config = {
        headers: { Authorization: `Bearer ${token}`},
      };
      const user = {
        member_id,
        isUser,
        status,
      };
      const {data:userData} = await api.post("/users",user,config)
      if(!userData) return res.redirect(`/admin/view/member/${member_id}`);
      return res.redirect(`/admin/view/member/${member_id}`)
      
    } catch (error) {
     return res.redirect(`/admin/view/member/${member_id}`);
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
  deleteUser: async (req,res) =>{

    try {
      const token = req.session.token;
      const {id,member_id} = req.body;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await api.delete(
        `/users/${id}`,
  
        config
      );
      return res.redirect(`/admin/view/member/${member_id}`)
      
    } catch (error) {
      
    }
  }
};

module.exports = adminControllers;
