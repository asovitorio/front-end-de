const pagesControllers = {

    index: (req,res) => {
        return res.render('pages/index')
    },
    videos: (req,res) => {
        return res.render('pages/videos',{title:'Videos',icon:'icon-film'})
    },
    podcast: (req,res) => {
        return res.render('pages/podcast',{title:'Podcast',icon:'icon-podcast'})
    },
    informativos: (req,res) => {
        return res.render('pages/informativos',{title:'Informativos',icon:'icon-file-pdf'})
    },
    galeria: (req,res) => {
        return res.render('pages/galeria',{title:'Galeria',icon:'icon-images'})
    },
    galeria: (req,res) => {
        return res.render('pages/login',{title:'Login',icon:'icon-images'})
    },
   
    

}

module.exports = pagesControllers