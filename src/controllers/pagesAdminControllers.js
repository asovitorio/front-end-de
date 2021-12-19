const { query } = require('express')
const api = require('../api/endpoind')
const { formatDate } = require('../utils/formatDate')
const pagesAdminControllers = {

    home:async(req,res) =>{
        const user =  req.user
        const active = {
           home:'active',
           about:'',
           servico:'' 
        }
        return res.render('admin/site/home',{user,active,title:'home'})
    },
    about:async(req,res) =>{
        const user =  req.user
        const active = {
           home:'',
           about:'active',
           servico:'' 
        }
        return res.render('admin/site/about',{user,active,title:'Sobre'})
    },
    service:async(req,res) =>{
        const user =  req.user
        const active = {
           home:'',
           about:'',
           service:'active' ,
           employees:'',
           register:''
           
        }
       
        return res.render('admin/site/service',{user,active,title:'Service'})
    },
    members:async(req,res) =>{
        const user =  req.user
        const active = {
           home:'',
           about:'',
           service:'' ,
           employees:'active',
           register:''
           
        }
       
        return res.render('admin/members/employees',{user,active,title:'Listar'})
    },
    createMember:async(req,res) =>{
        const user =  req.user
        const active = {
           home:'',
           about:'',
           service:'' ,
           employees:'',
           addMember:'active'
           
        }
       
        return res.render('admin/members/employee-register',{user,active,title:'Cadastro '})
    },
    videos: async(req,res) =>{
        const user =  req.user
        const active = {
           home:'',
           about:'',
           service:'' ,
           employees:'',
           addMember:'',
           videos:'active'
           
        }
        const {data:{episodes,total,limit}} =  (await api.get(`/episodes?page=${req.query.page?req.query.page:'1'}`))
        
        const pagination = Math.ceil(total/limit)
        console.log(pagination);
        const episodeMap = episodes.map(episode =>({
           ...episode,
           createdAt:formatDate(episode.createdAt)
        }))
       
       
        return res.render('admin/videos/list-videos',{user,active,title:'Listar',episodeMap,pagination})
    },
   formVideos: async(req,res) =>{
        const user =  req.user
        const active = {
           home:'',
           about:'',
           service:'' ,
           employees:'',
           addMember:'',
           videos:'',
           addVideos:'active'
           
        }
     let  [msg] = req.flash('video-create') 
     if(!msg) msg=false
        console.log(req.flash('video-create'))
        return res.render('admin/videos/register-video',{user,active,title:'Cadastro',msg})
    },
   createVideos: async(req,res) =>{
        const user =  req.user
        const active = {
           home:'',
           about:'',
           service:'' ,
           employees:'',
           addMember:'',
           videos:'',
           addVideos:'active'
           
        }
        const episode = {
            ...req.body,
            type:"youtube"
        }
       
        return res.send(episode)
        // return res.render('admin/videos/register-video',{user,active,title:'Cadastro',})
    },
    logout: (req,res) =>{
       req.session.destroy((err) =>{
           if(err) return console.log(err);
           res.redirect('/login')

       })

    }

}

module.exports = pagesAdminControllers