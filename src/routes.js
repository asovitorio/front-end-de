const express = require('express')
const pagesControllers = require('./controllers/pagesControllers')
const adminControllers = require('./controllers/adminControllers')
const adminMembersController = require('./controllers/adminMemberController')
const pagesAdminControllers = require('./controllers/pagesAdminControllers')
const pageViewMember = require('./controllers/pagesAdminControllers')
const avatar = require("./middlewares/avatar");
const { auth } = require('./middlewares/auth')
const adminVideoController = require('./controllers/adminVideoController')
const adminInformativeController = require('./controllers/adminInformativeController')
const adminEventController = require('./controllers/adminEventController')

const route = express.Router()
// ############  Pages ############
route.get('/',pagesControllers.index)
route.get('/videos',pagesControllers.videos)
route.get('/podcast',pagesControllers.podcast)
route.get('/informativos',pagesControllers.informativos)
route.get('/galeria',pagesControllers.galeria)
route.get('/login',pagesControllers.login)
route.get('/view-video',pagesControllers.viewVideo)
route.get('/view-member-de/:id',pagesControllers.viewMemberDe)
route.get('/view-event/:id',pagesControllers.viewGalery)


// ############ Administrativo ############
route.get('/admin/password/:token',adminControllers.password)
route.put('/admin/password',adminControllers.update)
route.post('/admin/login',adminControllers.login)

route.get('/admin/logout', auth, pagesAdminControllers.logout)

route.get('/admin/home', auth, pagesAdminControllers.home)
route.get('/admin/about', auth, pagesAdminControllers.about)
route.get('/admin/event', auth, pagesAdminControllers.event)
route.get('/admin/list-events', auth, pagesAdminControllers.listEvent)
route.get('/admin/delete/event/:id', auth, adminEventController.delete)

route.get('/admin/members', auth, pagesAdminControllers.members)
route.get('/admin/create/member', auth, pagesAdminControllers.createViewMember)
route.get('/admin/delete/member/:id', auth, adminMembersController.delete)
route.get('/admin/view/member/:id', auth, pagesAdminControllers.pageViewMember)

route.put('/admin/view/member', auth, adminControllers.updateUser)
route.post('/admin/view/user/reset', auth, adminControllers.resetPassUser)
route.post('/admin/user/create', auth, adminControllers.createUser)
route.post('/admin/user/delete', auth, adminControllers.deleteUser)

route.post('/admin/members', auth, avatar.single("avatar"), adminMembersController.create)

route.get('/admin/videos', auth, pagesAdminControllers.videos)
route.get('/admin/create/videos', auth, pagesAdminControllers.formVideos)
route.post('/admin/create/videos', auth, adminControllers.createVideos)
route.get('/admin/delete/videos/:id', auth, adminVideoController.delete)


route.get('/admin/list-informatives', auth, pagesAdminControllers.informatives)
route.get('/admin/form-informatives', auth, pagesAdminControllers.formInformatives)
route.get('/admin/delete/:id', auth, adminInformativeController.delete )

module.exports = route