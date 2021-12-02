const jwt = require('jsonwebtoken')
const api = require('../api/endpoind')

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
    login: (req, res) => {
        res.send(req.body)
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