const api = require('../api/endpoind')
const adminInformativeController = {
  delete: async (req, res) => {
    try {
        const {id} = req.params;
        const token = req.token
        
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

        const informative = await api.get(`/delete/informatives/${id}`,config)

      return res.redirect('/admin/list-informatives')

    } catch (error) {
      return res.send(error);
    }
  },
};

module.exports = adminInformativeController