const jwt = require("jsonwebtoken");
const api = require("../api/endpoind");
var FormData = require("form-data");
var fs = require("fs");
const adminMemberController = {
  create: async (req, res) => {
    try {
     
      return res.send(members);
    } catch (error) {
      return res.send(error.message)
    }
  },
};

module.exports = adminMemberController;
