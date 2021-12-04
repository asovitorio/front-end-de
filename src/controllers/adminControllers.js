const jwt = require('jsonwebtoken')
const api = require('../api/endpoind')
var session = require('express-session')
const adminControllers = {

    password: (req, res) => {

        try {
            const { token } = req.params
            const decode = jwt.decode(token)
            if (!decode) null
            const { id, name, email } = decode
            const user = { id, name, email }
            return res.render('admin/password', { user, token })

        } catch (error) {

            return res.render('error', { error, message: 'token invalid' })
        }
    },
    login:async (req, res) => {
       try {

           
        const {token} = await (await api.post('/auth',req.body)).data

        const user =  jwt.decode(token)
       const msg = false
     
       return res.render('admin/home',{user,msg})
       
    } catch (error) {
        const msg = {message:'Usuário ou senha invalido!',title:'Erro:401',local:'login'}
        return res.render('pages/login',{msg})
        
        
       }
    },
    update: async (req, res) => {
        try {
            const { token, id, password } = req.body
            const user = { id, password }
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const { data } = await api.put('/users', {
                id, password

            }, config)

            return res.render('admin/login')
        } catch (error) {
            res.send('erro token invalid    ' + error)
        }

    }

}

module.exports = adminControllers