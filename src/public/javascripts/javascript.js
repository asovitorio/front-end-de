

//###### 1 Controle: abre e fecha o menu ########
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toogle')
const links =document.querySelectorAll('nav ul a')

for (const element of toogle) {
    element.addEventListener('click',e => {
       nav.classList.toggle('show')
    })
}

for (const link of links) {
    link.addEventListener('click', e =>{
        nav.classList.remove('show')
    })
}
// ########## FIM  1 Controle ############
