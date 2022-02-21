const api = require('../api/endpoind')
const adminMemberController = {
  create: async (req, res) => {
    try {
     
      return res.send('teste');
    } catch (error) {
      return res.send(error.message)
    }
  },
  delete: async (req,res) =>{
    try {
      const token = req.token
      const {id} =req.params
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const {data:members} = await api.get(`/delete/members/${id}`,config) 
    console.log(config);
      return res.redirect('/admin/members')
    } catch (error) {
      return res.redirect('/admin/members')
    }
  }
};

module.exports = adminMemberController;
