const express = require('express')

const route = express.Router()

route.get('/',(req,res)=>{
   res.render('index',{title:"teste"})
})


module.exports = route