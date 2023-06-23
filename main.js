/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== <EMU HIDDEM =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*========== REMOVE MENU MOBILE ==========*/
  const navLink = document.querySelectorAll('.nav__link')

  function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))

/*========== ACCORDION SKILLS ==========*/

/*========== QUALIFICATION TABS ==========*/

/*========== SEFVICES MODAL ==========*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () =>{
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/*========== PORTFOLIO SWIPER ==========*/
let swiperPortfolio = new Swiper('.portfolio-container', {
    cssMode: true,
    loop: true,

      navigation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

/*========== TESTIMONAL ==========*/
let swiperTestimonial = new Swiper('.testimonial__container', {
  loop: true,
  grabCursor: true,
  
  navigation: {
    nextE1: '.swiper-button-next',
    prevE1: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*========== CHANGE BACKGROUND HEADER ==========*/
function scrollHeader(){
  const nav = document.getElementById('header')
  // when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scroll >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*========== SHOW SCROLL UP ==========*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up')
  // when the scroll is greater than 560 viewport height, add the show-scroll to the a tag with the scroll
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*========== SHOW SCROLL UP ==========*/