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

