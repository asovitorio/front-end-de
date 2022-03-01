const api = require('../api/endpoind')

const adminEventController = {

    delete: async (req,res) =>{
        try{
        const {id} = req.params;
        const token = req.token
        
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

        const event = await api.get(`/delete/event/${id}`,config)


    return res.redirect('/admin/list-events')


    } catch (error) {
      return res.send(error);
    }
    },
}

module.exports = adminEventController