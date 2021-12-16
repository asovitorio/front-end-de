const api = require('../api/endpoind')
const pagesControllers = {

    index: async (req,res) => {
        const {data:members} = await (await api.get('/my-time'))
        return res.render('pages/index',{members})
    },
    videos: async (req,res) => {
        const {episodes} = await (await api.get('/episodes')).data
       
        return res.render('pages/videos',{title:'Videos',icon:'icon-film',episodes,volta:'/#service'})
    },
    podcast: (req,res) => {
        return res.render('pages/podcast',{title:'Podcast',icon:'icon-podcast',volta:'/#service'})
    },
    informativos: (req,res) => {
        return res.render('pages/informativos',{title:'Informativos',icon:'icon-file-pdf',volta:'/#service'})
    },
    galeria: (req,res) => {
        return res.render('pages/galeria',{title:'Galeria',icon:'icon-images',volta:'/#service'})
    },
    login: (req,res) => {
        return res.render('pages/login',{title:'Login',icon:'icon-images',msg:false})
    },
    viewVideo: async(req,res) => {
        const {data:episode} = await (await api.get(`/episode/${req.query.id}`))
     
        return res.render('pages/video-view',{title:'Video',icon:'icon-play',episode,volta:'/videos'})
    },

    
   
    

}

module.exports = pagesControllers