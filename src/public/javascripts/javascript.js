// ####### 1 Controle de scroll coloca a sombra no nav ##########
const header = document.querySelector('#header')
const navHeigth = header.offsetHeight
const sections = document.querySelectorAll('main section[id]')

function changeHeaderWhenScroll(){
    if (window.scrollY >= navHeigth) {
        header.classList.add('scroll')
        header.style.transition = "0.4s"
    } else {
        header.classList.remove('scroll')
        
    }
}

function activateMenuCurrentSection(){
const checkpoint = window.pageYOffset + (window.innerHeight/8) * 4
for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')
    const checpointStart = checkpoint >= sectionTop
    const checpointEnd = checkpoint <= sectionTop + sectionHeight
    if(checpointStart && checpointEnd){
        document
        .querySelector('nav ul li a[href*=' + sectionId + ']' )
        .classList.add('active')
    }else{
        document
        .querySelector('nav ul li a[href*=' + sectionId + ']' )
        .classList.remove('active')
    }
    console.log(sectionId,sectionTop,sectionHeight);

}
}


window.addEventListener('scroll', e => {
    changeHeaderWhenScroll()
    activateMenuCurrentSection()
})
// ####### Menu ativo conforme a seção visivel #########


// ########## FIM  1 Controle de scroll coloca a sombra no nav ############

//###### 2 Controle: abre e fecha o menu ########
const nav = document.querySelector('.container-2')
const toogle = document.querySelectorAll('nav .toogle')
const links = document.querySelectorAll('nav ul a')

for (const element of toogle) {
    element.addEventListener('click', e => {
        nav.classList.toggle('show')
    })
}

for (const link of links) {
    link.addEventListener('click', e => {
        nav.classList.remove('show')
    })
}
// ########## FIM  2 Controle ############

// ########## 3 CONTROLE DO SLIDERS ############
const swiper = new Swiper('.swiper-container', {
    slidesPerView:1,
//    pagination:{
//       el:'.swiper-pagination' 
//    },
   mousewheel:true,
   keyboard:true,
   breakpoints:{
       992:{
           slidesPerView:2,
           setWrapperSize:true
       }
   }

  });

// SCROL REVIEW 

const scrollReveal = ScrollReveal({
    origin:"top",
    distance:'30px',
    duration:700,
    reset:true
})

scrollReveal.reveal(`
#home .image,#home .text,
#about .image, #about .title-2, #about .text p,
#service .cards title-2, #service .cards card p,
#events .title-2,#events .events,
#contact .title-2, #contact .ilustract,#contact .text p, #contact .text a, #contact .links,
#footer,.container .grid,
.context-header,#time .row
`,{interval:100})