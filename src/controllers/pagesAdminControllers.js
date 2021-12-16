
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
    logout: (req,res) =>{
       req.session.destroy((err) =>{
           if(err) return console.log(err);
           res.redirect('/login')

       })

    }

}

module.exports = pagesAdminControllers