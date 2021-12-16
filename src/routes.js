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
route.get('/view-video',pagesControllers.viewVideo)


// ############ Administrativo ############
route.get('/admin/password/:token',adminControllers.password)
route.put('/admin/password',adminControllers.update)
route.post('/admin/login',adminControllers.login)

route.get('/admin/logout', auth, pagesAdminControllers.logout)

route.get('/admin/home', auth, pagesAdminControllers.home)
route.get('/admin/about', auth, pagesAdminControllers.about)
route.get('/admin/service', auth, pagesAdminControllers.service)

route.get('/admin/members', auth, pagesAdminControllers.members)
route.get('/admin/create/member', auth, pagesAdminControllers.createMember)

module.exports = route