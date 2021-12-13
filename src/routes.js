const express = require('express')
const pagesControllers = require('./controllers/pagesControllers')
const adminControllers = require('./controllers/adminControllers')
const pagesAdminControllers = require('./controllers/pagesAdminControllers')
const { auth } = require('./middlewares/auth')
const route = express.Router()
// ############  Pages ############
route.get('/',pagesControllers.index)
route.get('/videos',pagesControllers.videos)
route.get('/podcast',pagesControllers.podcast)
route.get('/informativos',pagesControllers.informativos)
route.get('/galeria',pagesControllers.galeria)
route.get('/login',pagesControllers.login)


// ############ Administrativo ############
route.get('/admin/password/:token',adminControllers.password)
route.put('/admin/password',adminControllers.update)
route.post('/admin/login',adminControllers.login)
route.get('/admin/home', auth, pagesAdminControllers.home)
route.get('/admin/logout', auth, pagesAdminControllers.logout)


module.exports = route