const bd = [
    {   
        id:1,
        name:"Alessandro",
        age:40
    },
    {   
        id:2,
        name:"Sandra",
        age:46
    },
    {   
        id:3,
        name:"Erick",
        age:14
    },
]

function findById(id, bd=[]){
    const filter = bd.filter(search => search.id==id )
    return filter;
}

function finByName(name,bd=[]){
    const filter = bd.filter(search =>search.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    return filter
}

function insert(obj={},bd=[]){
    const date  = {
        ...obj,
        id: bd.length + 1
    }
    bd.push(date)
    return {date,insert:'Ok'}
}
// console.log(finByName('e',bd));
 console.log(insert({name:'Testes',age:400},bd));
 console.log(bd);




 const jwt = require("jsonwebtoken");
const api = require("../api/endpoind");
var FormData = require("form-data");
var fs = require("fs");
const adminMembresController = {
  create: async (req, res) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `multipart/form-data; boundary=${boundary}`
          
        },
      };
      const member = {
        ...req.body,
        time: req.body.time == "on" ? true : false,
      };
      
      return res.send({ member, file: req.file });
      //   const { title, members, link, description, duration } = req.body;
      
      //   const episode = await (
        //     await api.post(
          //       "/episodes",
          //       { title, members, link, description, duration, type: "mp4" },
          //       config
          //     )
          //   ).data;
          //   req.flash('video-create', true)
          //   return res.redirect('/admin/create/videos');
        } catch (error) {
          const msg = false;
          return res.redirect("/admin/create/videos");
        }
      },
    };
    
    module.exports = adminMembresController;
    
          const file = req.file;
          const form = new FormData();
          form.append("avatar", file.buffer, file.originalname);
          form.append("name", req.body.name);
          form.append("func", req.body.func);
          form.append("birth", req.body.birth);
          const boundary = form.getBoundary()
          const token = req.token;
          console.log(form);
    return res.send(req.body)

    const avatar = document.querySelector('#avatar')
    const name = document.querySelector("input[name='name'")
    const func = document.querySelector("input[name='func'")
    const birth = document.querySelector("input[name='birth'")
    const full_name = document.querySelector("input[name='full_name'")
    const cellphone = document.querySelector("input[name='cellphone'")
    const description = document.querySelector("input[name='description'")
    const time = document.querySelector("input[name='time'")
    const locatio = document.querySelector("#location")
    const gender = document.querySelector("input[name='gender'")
    const status = document.querySelector("input[name='status'")