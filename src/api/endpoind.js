const axios = require('axios')
require('dotenv').config()
const baseUrl =  process.env.END_POINT
console.log(baseUrl);
const api = axios.default.create({
    baseURL:baseUrl
})

module.exports = api