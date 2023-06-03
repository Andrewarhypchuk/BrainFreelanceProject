let menuHeader = document.querySelector('.header__menu');
let menuHypers = document.querySelector('.menu__hypers')
let burger = document.querySelector('.menu__burger');
let mobileLogo = document.querySelector('.menu__phoneLogo');
let closeMenuArrow = document.querySelector('.menu__closeArrow');
let sliderFromLeft = document.getElementById('slide__from__left');
let sliderFromRight = document.getElementById('slide__from__right');
let sliderPhoneAddition = document.getElementById('additional__phone__slide');
window.addEventListener('scroll', function() {
    if(window.innerWidth > 850){
        if(pageYOffset > 400 ){
            menuHeader.classList.add('header__menu_changed')
            menuHypers.classList.add('menu__hypers__hide');
            burger.classList.add('menu__burger_changed')
        }else{
            menuHeader.classList.remove('header__menu_changed')
            menuHypers.classList.remove('menu__hypers__hide');
            burger.classList.remove('menu__burger_changed')
        }
    }
})
window.addEventListener('touchmove',function(e){
    if(e.touches[0].clientY  >600){
        sliderFromLeft.classList.add('lower-part__slide-from-left-to-center')
        sliderFromRight.classList.add('lower-part__slide-from-right-to-center')
        sliderPhoneAddition.classList.add('lower-part__additional-phone-slide-to-center')
    }
    if(e.touches[0].clientY <600){
        sliderFromLeft.classList.remove('lower-part__slide-from-left-to-center')
        sliderFromRight.classList.remove('lower-part__slide-from-right-to-center')
        sliderPhoneAddition.classList.remove('lower-part__additional-phone-slide-to-center')
    }

})
burger.addEventListener('click',()=>{ 
    if(window.innerWidth > 1160){
        menuHeader.classList.remove('header__menu_changed')
        menuHypers.classList.remove('menu__hypers__hide');
        burger.classList.remove('menu__burger_changed')
    }else{
      
        menuHeader.classList.add('header__menu_mobile')
        menuHypers.classList.add('menu__hypers_opened');
        mobileLogo.classList.add('menu__phoneLogo_opened')
        closeMenuArrow.classList.add('menu__closeArrow_opened')
        burger.classList.add('none')
    }
 
})
closeMenuArrow.addEventListener('click',()=>{
    menuHeader.classList.remove('header__menu_mobile')
        menuHypers.classList.remove('menu__hypers_opened');
        mobileLogo.classList.remove('menu__phoneLogo_opened')
        burger.classList.remove('none');
        closeMenuArrow.classList.remove('menu__closeArrow_opened')
})




