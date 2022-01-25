const api = require("../api/endpoind");
const { formatDate } = require("../utils/formatDate");
require('dotenv').config()
const url = process.env.END_POINT
async function mapMember(member, config) {
  return (await api.get(`/search/user?member_id=${member.id}`, config))
    ? true
    : false;
}
const pagesAdminControllers = {
  home: async (req, res) => {
    const user = req.user;
    const active = {
      home: "active",
      about: "",
      servico: "",
    };
    const {data:home} = await api.get('/home')
   
    const token = req.token;
    return res.render("admin/site/home", { user, active, title: "home" ,token,home,url});
  },
  about: async (req, res) => {
    const user = req.user;
    const active = {
      home: "",
      about: "active",
      servico: "",
    };
    const token = req.token;
    const {data:about} = await api.get('/about')
    return res.render("admin/site/about", { user, active, title:about[0].title,about,token,url});
  },
  event: async (req, res) => {
    const user = req.user;
    const active = {
      home: "",
      about: "",
      service: "active",
      employees: "",
      register: "",
    };
    const token = req.token
    const {data:event} = await api.get('/event')
    return res.render("admin/site/event", { user, active, title: "Evento",url,event,token});
  },
  members: async (req, res) => {
    const user = req.user;
    const active = {
      home: "",
      about: "",
      service: "",
      employees: "active",
      register: "",
    };
    const config = {
      headers: {
        Authorization: `Bearer ${req.token}`,
      },
    };
    const {
      data: { members, total, limit },
    } = await api.get(
      `/members?page=${req.query.page ? req.query.page : "1"}`,
      config
    );

    //  return res.send({members,total,limit})
    const pagination = Math.ceil(total / limit);

    return res.render("admin/members/employees", {
      user,
      active,
      title: "Listar",
      members,
      total,
      pagination,
    });
  },
  createViewMember: async (req, res) => {
    const user = req.user;
    const active = {
      home: "",
      about: "",
      service: "",
      employees: "",
      addMember: "active",
      informative:""
    };
    const token = req.token;
    return res.render("admin/members/employee-register", {
      user,
      active,
      title: "Cadastro",
      token,
      api,
      url
    });
  },
  videos: async (req, res) => {
    const user = req.user;
    const active = {
      home: "",
      about: "",
      service: "",
      employees: "",
      addMember: "",
      videos: "active",
      informative:""
    };
    const {
      data: { episodes, total, limit },
    } = await api.get(
      `/episodes?page=${req.query.page ? req.query.page : "1"}`
    );

    const pagination = Math.ceil(total / limit);

    const episodeMap = episodes.map((episode) => ({
      ...episode,
      createdAt: formatDate(episode.createdAt),
    }));

    return res.render("admin/videos/list-videos", {
      user,
      active,
      title: "Listar",
      episodeMap,
      pagination,
      url
    });
  },
  informatives: async (req, res) => {
    const user = req.user;
    const active = {
      home: "",
      about: "",
      service: "",
      employees: "",
      addMember: "",
      videos: "",
      informative:"active"
    };
  
    const {data:informatives} = await api.get('/informatives')
    console.log(informatives);
    return res.render("admin/informatives/list-informatives", {
      user,
      active,
      title: "Listar",
      informatives,
      formatDate,
      url
    });
  },
  formInformatives: async (req, res) => {
    const user = req.user;
    const token = req.token;
    const active = {
      home: "",
      about: "",
      service: "",
      employees: "",
      addMember: "",
      videos: "",
      addVideos: "",
      informative:"",
      addInformative: "active",
    };
    let [msg] = req.flash("informative-create");
    if (!msg) msg = false;
    console.log(url);
    return res.render("admin/informatives/create-informatives", {
      user,
      active,
      title: "Cadastro",
      msg,
      token,
      url
    });
  },
  formVideos: async (req, res) => {
    const user = req.user;
    const active = {
      home: "",
      about: "",
      service: "",
      employees: "",
      addMember: "",
      videos: "",
      addVideos: "active",
      informative:""
    };
    let [msg] = req.flash("video-create");
    if (!msg) msg = false;
    console.log(req.flash("video-create"));
    return res.render("admin/videos/register-video", {
      user,
      active,
      title: "Cadastro",
      msg,
      url
    });
  },
  pageViewMember: async (req, res) => {
    const user = req.user;
    const active = {
      home: "",
      about: "",
      service: "",
      employees: "active",
      addMember: "",
      videos: "",
      addVideos: "",
      informative:""
    };
    const config = {
      headers: {
        Authorization: `Bearer ${req.token}`,
      },
    };
    const {
      data:member,
    } = await api.get(
      `/members/${req.params.id}`,
      config
    );
     
    return res.render("admin/members/employee-view", {
      user,
      active,
      title: "Perfil",
      member,
      url,
      formatDate
    });
  },
  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) return console.log(err);
      res.redirect("/login");
    });
  },
};

module.exports = pagesAdminControllers;
