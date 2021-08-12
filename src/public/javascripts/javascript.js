// ####### 1 Controle de scroll coloca a sombra no nav ##########
const header = document.querySelector('#header')
const navHeigth = header.offsetHeight
console.log(navHeigth);
window.addEventListener('scroll', e => {
    if (window.scrollY >= navHeigth) {
        header.classList.add('scroll')
        
        header.style.transition = "0.4s"
    } else {
        header.classList.remove('scroll')
        
    }
})
// ########## FIM  1 Controle de scroll coloca a sombra no nav ############

//###### 2 Controle: abre e fecha o menu ########

// ########## FIM  2 Controle ############

// ########## 3 CONTROLE DO SLIDERS ############
const swiper = new Swiper('.swiper-container', {
    slidesPerView:1,
   pagination:{
      el:'.swiper-pagination' 
   },
   mousewheel:true,
   keyboard:true,

  });

// SCROL REVIEW 

const scrollReveal = ScrollReveal({
    origin:"top",
    distance:'30px',
    duration:700,
    reset:true
})

scrollReveal.reveal(`
#home,
#about .image, #about .title-2, #about .text p,
#service .cards title-2, #service .cards p, #service .cards .card,
#events .title-2,#events .events,
#contact .title-2, #contact .ilustract,#contact .text p, #contact .text a, #contact .links,
#footer,.container-2 .grid
`,{interval:100})