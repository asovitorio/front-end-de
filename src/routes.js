const express = require('express')
const pagesControllers = require('./controllers/pagesControllers')
const adminControllers = require('./controllers/adminControllers')
const adminMembersController = require('./controllers/adminMemberController')
const pagesAdminControllers = require('./controllers/pagesAdminControllers')
const avatar = require("./middlewares/avatar");
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
route.post('/admin/members', auth, avatar.single("avatar"), adminMembersController.create)
route.get('/admin/create/member', auth, pagesAdminControllers.createViewMember)

route.get('/admin/videos', auth, pagesAdminControllers.videos)
route.get('/admin/create/videos', auth, pagesAdminControllers.formVideos)
route.post('/admin/create/videos', auth, adminControllers.createVideos)

module.exports = route