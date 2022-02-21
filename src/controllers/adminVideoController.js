const jwt = require("jsonwebtoken");
const api = require("../api/endpoind");

const adminVideoController ={

    create: async (req, res) => {
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
      delete: async (req, res) => {
        const token = req.token
        console.log(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
        try {
          const response = await api.get(`/delete/episodes/${req.params.id}`,config)
          return res.redirect('/admin/videos')
        } catch (error) {
          return res.send(error);
        }
      },
}

module.exports = adminVideoController