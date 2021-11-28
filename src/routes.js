const express = require('express')
const pagesControllers = require('./controllers/pagesControllers')
const adminControllers = require('./controllers/adminControllers')
const route = express.Router()
// ############  Pages ############
route.get('/',pagesControllers.index)
route.get('/videos',pagesControllers.videos)
route.get('/podcast',pagesControllers.podcast)
route.get('/informativos',pagesControllers.informativos)
route.get('/galeria',pagesControllers.galeria)

// ############  Pages ############
route.get('/admin/password/:token',adminControllers.password)
route.put('/admin/password',adminControllers.update)


module.exports = route