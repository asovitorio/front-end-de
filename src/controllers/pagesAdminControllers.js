
const pagesAdminControllers = {

    home:async(req,res) =>{
        const user =  req.user
        console.log(req.user);
        return res.render('admin/home',{user})
    },
    logout: (req,res) =>{
       req.session.destroy((err) =>{
           if(err) return console.log(err);
           res.redirect('/login')

       })

    }

}

module.exports = pagesAdminControllers