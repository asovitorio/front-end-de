const api = require("../api/endpoind");
const { formatDate } = require("../utils/formatDate");
const pagesControllers = {
  index: async (req, res) => {
    try {
      const { data: members } = await api.get("/my-time");
      const { data: about } = await api.get("/about");
      const { data: home } = await api.get("/home");
      const { data: event } = await api.get("/event");

      return res.render("pages/index", { members, home, about, event });
    } catch (error) {
      return res.send("Erro => " + error.message);
    }
  },
  videos: async (req, res) => {
    const episodes = await (await api.get("/list-episodes")).data;

    return res.render("pages/videos", {
      title: "Videos",
      icon: "icon-film",
      episodes,
      volta: "/#service",
      formatDate,
    });
  },
  podcast: (req, res) => {
    return res.render("pages/podcast", {
      title: "Podcast",
      icon: "icon-podcast",
      volta: "/#service",
    });
  },
  informativos: async (req, res) => {
    const informatives = (await api.get("/informatives")).data;

    return res.render("pages/informativos", {
      title: "Informativos",
      icon: "icon-file-pdf",
      volta: "/#service",
      informatives,
      formatDate,
    });
  },
  galeria: async (req, res) => {
    const { data: events } = await api.get("/event");
    return res.render("pages/galeria", {
      title: "Galeria",
      icon: "icon-images",
      volta: "/#service",
      events,
    });
  },
  login: (req, res) => {
    return res.render("pages/login", {
      title: "Login",
      icon: "icon-images",
      msg: false,
    });
  },
  viewVideo: async (req, res) => {
    const { data: episode } = await await api.get(`/episode/${req.query.id}`);

    return res.render("pages/video-view", {
      title: "Video",
      icon: "icon-play",
      episode,
      volta: "/videos",
    });
  },
  viewMemberDe: async (req, res) => {
    const { data: member } = await api.get(`/members/${req.params.id}`);

    return res.render("pages/member-view-de", {
      title: "#EQUIPE-DE ",
      icon: "icon-user",
      volta: "/#time",
      member,
      formatDate,
    });
  },
  viewGalery: async (req, res) => {
    const { data: event } = await api.get(`/event/${req.params.id}`);
    return res.render("pages/galeria-view", {
      title: "Galeria",
      icon: "icon-images",
      event,
      volta: "/galeria",
      formatDate,
    });
  },
};

module.exports = pagesControllers;
