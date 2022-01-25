const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  
  const user = jwt.decode(req.session.token);
  const msg = {
    message:
      "Algo inesperado aconteceu com sua sessão:Logue com usuário e senha",
    title: "Erro de Sessão",
    local: "login",
  };
  if (!user) return res.render("pages/login", { msg });
  if (!user.status) {
      msg.message = 'Você não tem mais privilégios de adm'
      msg.title = 'Acesso negado!'
    return res.render("pages/login", { msg });
  }
  if (!req.session.token) return res.render("pages/login", { msg });
  req.user = user;
  req.token = req.session.token
  next();
};

module.exports = { auth };
