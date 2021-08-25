const express = require('express')
const pagesControllers = require('./controllers/pagesControllers')
const route = express.Router()

route.get('/',pagesControllers.index)
route.get('/videos',pagesControllers.videos)
route.get('/podcast',pagesControllers.podcast)
route.get('/informativos',pagesControllers.informativos)
route.get('/galeria',pagesControllers.galeria)


module.exports = route