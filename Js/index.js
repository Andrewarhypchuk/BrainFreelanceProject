let menuHeader = document.querySelector('.header__menu');
let menuHypers = document.querySelector('.menu__hypers')
let burger = document.querySelector('.menu__burger');
let mobileLogo = document.querySelector('.menu__phoneLogo');
let closeMenuArrow = document.querySelector('.menu__closeArrow');
let sliderFromLeft = document.getElementById('slide__from__left');
let sliderFromRight = document.getElementById('slide__from__right');
let sliderPhoneAddition = document.getElementById('additional__phone__slide');
window.addEventListener('scroll', function () {
    if (window.innerWidth > 850) {
        if (pageYOffset > 250) {
            sliderFromLeft.classList.add('lower-part__slide-from-left-to-center')
            sliderFromRight.classList.add('lower-part__slide-from-right-to-center')
            sliderPhoneAddition.classList.add('lower-part__additional-phone-slide-to-center')
        } else {
            sliderFromLeft.classList.remove('lower-part__slide-from-left-to-center')
            sliderFromRight.classList.remove('lower-part__slide-from-right-to-center')
            sliderPhoneAddition.classList.remove('lower-part__additional-phone-slide-to-center')
        }
        if (pageYOffset > 0) {
            menuHeader.classList.add('header__menu_changed')
            menuHypers.classList.add('menu__hypers__hide');
            burger.classList.add('menu__burger_changed')
        } else {
            menuHeader.classList.remove('header__menu_changed')
            menuHypers.classList.remove('menu__hypers__hide');
            burger.classList.remove('menu__burger_changed')
        }
    }
})
window.addEventListener('touchmove', function (e) {
    if (pageYOffset > 150) {
        sliderFromLeft.classList.add('lower-part__slide-from-left-to-center')
        sliderFromRight.classList.add('lower-part__slide-from-right-to-center')
        sliderPhoneAddition.classList.add('lower-part__additional-phone-slide-to-center')
    }
    if (pageYOffset < 150) {
        sliderFromLeft.classList.remove('lower-part__slide-from-left-to-center')
        sliderFromRight.classList.remove('lower-part__slide-from-right-to-center')
        sliderPhoneAddition.classList.remove('lower-part__additional-phone-slide-to-center')
    }
    if (pageYOffset > 200) {
        document.querySelector('.middleanimation').classList.add('middleanimation__lower')
    } else {
        document.querySelector('.middleanimation').classList.remove('middleanimation__lower')
    }

})
window.addEventListener('touchmove', function (e) {
    console.log(pageYOffset)
})
burger.addEventListener('click', () => {
    document.querySelector('.header-container').classList.add('filter')
    if (window.innerWidth > 850) {
        menuHeader.classList.remove('header__menu_changed')
        menuHypers.classList.remove('menu__hypers__hide');
        burger.classList.remove('menu__burger_changed')
    } else {
        menuHeader.classList.add('header__menu_mobile')
        menuHypers.classList.add('menu__hypers_opened');
        mobileLogo.classList.add('menu__phoneLogo_opened')
        closeMenuArrow.classList.add('menu__closeArrow_opened')
        burger.classList.add('none')
    }

})
closeMenuArrow.addEventListener('click', () => {
    menuHeader.classList.remove('header__menu_mobile')
    menuHypers.classList.remove('menu__hypers_opened');
    mobileLogo.classList.remove('menu__phoneLogo_opened')
    burger.classList.remove('none');
    closeMenuArrow.classList.remove('menu__closeArrow_opened');
    document.querySelector('.header-container').classList.remove('filter')
})
let hyper1 = document.getElementById('hyper1').addEventListener('click', () => {
    menuHeader.classList.remove('header__menu_mobile')
    menuHypers.classList.remove('menu__hypers_opened');
    mobileLogo.classList.remove('menu__phoneLogo_opened')
    burger.classList.remove('none');
    closeMenuArrow.classList.remove('menu__closeArrow_opened');
    document.querySelector('.header-container').classList.remove('filter')
})
let hyper2 = document.getElementById('hyper2').addEventListener('click', () => {
    menuHeader.classList.remove('header__menu_mobile')
    menuHypers.classList.remove('menu__hypers_opened');
    mobileLogo.classList.remove('menu__phoneLogo_opened')
    burger.classList.remove('none');
    closeMenuArrow.classList.remove('menu__closeArrow_opened');
    document.querySelector('.header-container').classList.remove('filter')
})
let hyper3 = document.getElementById('hyper3').addEventListener('click', () => {
    menuHeader.classList.remove('header__menu_mobile')
    menuHypers.classList.remove('menu__hypers_opened');
    mobileLogo.classList.remove('menu__phoneLogo_opened')
    burger.classList.remove('none');
    closeMenuArrow.classList.remove('menu__closeArrow_opened');
    document.querySelector('.header-container').classList.remove('filter')
})
let hyper4 = document.getElementById('hyper4').addEventListener('click', () => {
    menuHeader.classList.remove('header__menu_mobile')
    menuHypers.classList.remove('menu__hypers_opened');
    mobileLogo.classList.remove('menu__phoneLogo_opened')
    burger.classList.remove('none');
    closeMenuArrow.classList.remove('menu__closeArrow_opened');
    document.querySelector('.header-container').classList.remove('filter')
})
let hyper5 = document.getElementById('hyper5').addEventListener('click', () => {
    menuHeader.classList.remove('header__menu_mobile')
    menuHypers.classList.remove('menu__hypers_opened');
    mobileLogo.classList.remove('menu__phoneLogo_opened')
    burger.classList.remove('none');
    closeMenuArrow.classList.remove('menu__closeArrow_opened');
    document.querySelector('.header-container').classList.remove('filter')
})
let hyper6 = document.getElementById('hyper6').addEventListener('click', () => {
    menuHeader.classList.remove('header__menu_mobile')
    menuHypers.classList.remove('menu__hypers_opened');
    mobileLogo.classList.remove('menu__phoneLogo_opened')
    burger.classList.remove('none');
    closeMenuArrow.classList.remove('menu__closeArrow_opened');
    document.querySelector('.header-container').classList.remove('filter')
})





let infoItem1 = document.querySelector('.information-container__item1');
let infoItem1Text = document.querySelector('.item1__text');
let infoItem1Arrow = document.querySelector('.item1__arrow');
function changeItem1() {
    infoItem1.classList.toggle('information-container__item1-opened');
    infoItem1Text.classList.toggle('item1__text-opened')
    infoItem1Arrow.classList.toggle('item1__arrow-opened');
}
let infoItem2 = document.querySelector('.information-container__item2');
let infoItem2Text = document.querySelector('.item2__text');
let infoItem2Arrow = document.querySelector('.item2__arrow');
function changeItem2() {
    infoItem2.classList.toggle('information-container__item2-opened');
    infoItem2Text.classList.toggle('item2__text-opened')
    infoItem2Arrow.classList.toggle('item2__arrow-opened');
}
let infoItem3 = document.querySelector('.item3-4__item3');
let infoItem3Text = document.querySelector('.item3__text');
let infoItem3Arrow = document.querySelector('.item3__arrow');
let infoItem3Left_Short_Line = document.querySelector('.item2__line1');
let infoItem3Left_Long_Line = document.querySelector('.item3__left-long-line');
let infoItem3Right_Long_Line = document.querySelector('.item3__right-long-line');
let item4RightLongLine = document.querySelector('.item4__right-long-line');
let item4LeftLongLine = document.querySelector('.item4__left-long-line');
let item2DownLine = document.querySelector('.item2__line2');
let item5LineUP = document.querySelector('.item5__left-short-line1');
let item5LineDown = document.querySelector('.item5__left-short-line2');
function changeItem3() {
    infoItem3.classList.toggle('item3-4__item3-opened');
    infoItem3Text.classList.toggle('item3__text-opened');
    infoItem3Arrow.classList.toggle('item3__arrow-opened');
    infoItem3Left_Short_Line.classList.toggle('item2__line1-hidden')
    infoItem3Left_Long_Line.classList.toggle('item3__left-long-line-opened');
    infoItem3Right_Long_Line.classList.toggle('item3__right-long-line-opened');
    item4LeftLongLine.classList.toggle('item4__left-long-line-opened')
    item4RightLongLine.classList.toggle('item4__right-long-line-opened');
    item2DownLine.classList.toggle('item2__line2-opened');
    item5LineUP.classList.toggle('item5__left-short-line1-closed')
    item5LineDown.classList.toggle('item5__left-short-line2-closed')
}
let infoItem4 = document.querySelector('.item3-4__item4');
let infoItem4Text = document.querySelector('.item4__text');
let infoItem4Arrow = document.querySelector('.item4__arrow');
function changeItem4() {
    infoItem4.classList.toggle('item3-4__item4-opened');
    infoItem4Text.classList.toggle('item4__text-opened')
    infoItem4Arrow.classList.toggle('item4__arrow-opened');
}
//закриття карточок
window.addEventListener('scroll', () => {

    if (window.innerWidth > 1160) {
        if (pageYOffset > 2000) {
            infoItem1.classList.remove('information-container__item1-opened');
            infoItem1Text.classList.remove('item1__text-opened')
            infoItem1Arrow.classList.remove('item1__arrow-opened');
            infoItem2.classList.remove('information-container__item2-opened');
            infoItem2Text.classList.remove('item2__text-opened')
            infoItem2Arrow.classList.remove('item2__arrow-opened');
            infoItem3.classList.remove('item3-4__item3-opened');
            infoItem3Text.classList.remove('item3__text-opened');
            infoItem3Arrow.classList.remove('item3__arrow-opened');
            infoItem3Left_Short_Line.classList.remove('item2__line1-hidden')
            infoItem3Left_Long_Line.classList.remove('item3__left-long-line-opened');
            infoItem3Right_Long_Line.classList.remove('item3__right-long-line-opened');
            item4LeftLongLine.classList.remove('item4__left-long-line-opened')
            item4RightLongLine.classList.remove('item4__right-long-line-opened');
            item2DownLine.classList.remove('item2__line2-opened');
            item5LineUP.classList.remove('item5__left-short-line1-closed')
            item5LineDown.classList.remove('item5__left-short-line2-closed')
            infoItem4.classList.remove('item3-4__item4-opened');
            infoItem4Text.classList.remove('item4__text-opened')
            infoItem4Arrow.classList.remove('item4__arrow-opened');
        }
    }
    if (window.innerWidth > 850) {
        if (pageYOffset > 1800) {
            infoItem1.classList.remove('information-container__item1-opened');
            infoItem1Text.classList.remove('item1__text-opened')
            infoItem1Arrow.classList.remove('item1__arrow-opened');
            infoItem2.classList.remove('information-container__item2-opened');
            infoItem2Text.classList.remove('item2__text-opened')
            infoItem2Arrow.classList.remove('item2__arrow-opened');
            infoItem3.classList.remove('item3-4__item3-opened');
            infoItem3Text.classList.remove('item3__text-opened');
            infoItem3Arrow.classList.remove('item3__arrow-opened');
            infoItem3Left_Short_Line.classList.remove('item2__line1-hidden')
            infoItem3Left_Long_Line.classList.remove('item3__left-long-line-opened');
            infoItem3Right_Long_Line.classList.remove('item3__right-long-line-opened');
            item4LeftLongLine.classList.remove('item4__left-long-line-opened')
            item4RightLongLine.classList.remove('item4__right-long-line-opened');
            item2DownLine.classList.remove('item2__line2-opened');
            item5LineUP.classList.remove('item5__left-short-line1-closed')
            item5LineDown.classList.remove('item5__left-short-line2-closed')
            infoItem4.classList.remove('item3-4__item4-opened');
            infoItem4Text.classList.remove('item4__text-opened')
            infoItem4Arrow.classList.remove('item4__arrow-opened');
        }
    }
    if (window.innerWidth < 850) {
        if (pageYOffset > 2200) {
            //закриваємо 1 моб карточку
            phoneItem1.classList.remove('information-container-phone__item1-opened');
            phoneItem1Text.classList.remove('item1__textPhone-opened');
            //закриваємо 2 моб карточку
            phoneItem2.classList.remove('information-container-phone__item2-opened');
            phoneItem2Text.classList.remove('item2__textPhone-opened');

            ItemContainer3_4.classList.remove('information-container-phone__item3-4-opened');
            //закриваємо 4 моб карточку
            phoneItem4.classList.remove('item3-4__item4Phone-opened')
            phoneItem4Text.classList.remove('item4__textPhone-opened')
            phoneItem4UpperCircle.classList.remove('item4__circlePhone1-opened');
            phoneItem2RightLongLine.classList.remove('item2__longLine-right-opened')
            phoneItem2RightShortLine.classList.remove('item2__shortLine-right-opened')
            phoneArrow4.classList.remove('item4__arrowPhone-opened');
            document.querySelector('.item3__circlePhone2').classList.remove('none');
            document.querySelector('.item3__circleAdditionPhone2').classList.remove('none');
            phoneItem4AdditionCircle.classList.remove('item4__circleAdditionPhone2-opened');
            //закриваємо 3 моб карточку
            phoneItem3.classList.remove('item3-4__item3Phone-opened')
            phoneItem3Text.classList.remove('item3__textPhone-opened')
            phoneItem3UpperCircle.classList.remove('item3__circlePhone1-opened');
            phoneItem2LeftLongLine.classList.remove('item2__longLine-left-opened');
            phoneItem2LeftShortLine.classList.remove('item2__shortLine-left-opened')
            phoneArrow3.classList.remove('item3__arrowPhone-opened');
            document.querySelector('.item4__circlePhone2').classList.remove('none');
            document.querySelector('.item4__circleAdditionPhone2').classList.remove('none');
            phoneItem3AdditionCircle.classList.remove('item3__circleAdditionPhone2-opened');
        }
    }
}
)

let phoneItem1 = document.querySelector('.information-container-phone__item1');
let phoneItem1Text = document.querySelector('.item1__textPhone');
let phoneArrow1 = document.getElementById('arrow1phone');
let phoneItem2 = document.querySelector('.information-container-phone__item2');
let phoneItem2Text = document.querySelector('.item2__textPhone');
let phoneArrow2 = document.getElementById('arrow2phone');
function changePhoneItem1() {
    phoneItem1.classList.toggle('information-container-phone__item1-opened');
    phoneItem1Text.classList.toggle('item1__textPhone-opened');
    phoneItem2.classList.remove('information-container-phone__item2-opened');
    phoneItem2Text.classList.remove('item2__textPhone-opened');
}

let phoneItem2RightLongLine = document.querySelector('.item2__longLine-right');
let phoneItem2LeftLongLine = document.querySelector('.item2__longLine-left');
let phoneItem2RightShortLine = document.querySelector('.item2__shortLine-right');
let phoneItem2LeftShortLine = document.querySelector('.item2__shortLine-left');
function changePhoneItem2() {
    phoneItem2.classList.toggle('information-container-phone__item2-opened');
    phoneItem2Text.classList.toggle('item2__textPhone-opened');
    phoneItem1.classList.remove('information-container-phone__item1-opened');
    phoneItem1Text.classList.remove('item1__textPhone-opened');
}
let ItemContainer3_4 = document.querySelector('.information-container-phone__item3-4')
let phoneItem3 = document.querySelector('.item3-4__item3Phone');
let phoneItem3Text = document.querySelector('.item3__textPhone');
let phoneArrow3 = document.getElementById('arrow3phone');
let phoneItem3UpperCircle = document.querySelector('.item3__circlePhone1');
let phoneItem3AdditionCircle = document.querySelector('.item3__circleAdditionPhone2');
let phoneItem4 = document.querySelector('.item3-4__item4Phone');
let phoneItem4Text = document.querySelector('.item4__textPhone');
let phoneArrow4 = document.getElementById('arrow4phone');
let phoneItem4UpperCircle = document.querySelector('.item4__circlePhone1');
let phoneItem4AdditionCircle = document.querySelector('.item4__circleAdditionPhone2');
function changePhoneItem3() {
    if (phoneArrow3.classList.contains('item3__arrowPhone-opened')) {
        ItemContainer3_4.classList.remove('information-container-phone__item3-4-opened');
    } else {
        ItemContainer3_4.classList.add('information-container-phone__item3-4-opened');
    }

    phoneItem3.classList.toggle('item3-4__item3Phone-opened')
    phoneItem3Text.classList.toggle('item3__textPhone-opened')
    phoneItem3UpperCircle.classList.toggle('item3__circlePhone1-opened');
    phoneItem2LeftLongLine.classList.toggle('item2__longLine-left-opened');
    phoneItem2LeftShortLine.classList.toggle('item2__shortLine-left-opened')
    phoneArrow3.classList.toggle('item3__arrowPhone-opened');
    document.querySelector('.item4__circlePhone2').classList.toggle('none');
    document.querySelector('.item4__circleAdditionPhone2').classList.toggle('none');
    phoneItem3AdditionCircle.classList.toggle('item3__circleAdditionPhone2-opened');
    //закриваємо item4 
    phoneItem4.classList.remove('item3-4__item4Phone-opened')
    phoneItem4Text.classList.remove('item4__textPhone-opened')
    phoneItem4UpperCircle.classList.remove('item4__circlePhone1-opened');
    phoneItem2RightLongLine.classList.remove('item2__longLine-right-opened')
    phoneItem2RightShortLine.classList.remove('item2__shortLine-right-opened')
    phoneArrow4.classList.remove('item4__arrowPhone-opened');
    document.querySelector('.item3__circlePhone2').classList.remove('none');
    document.querySelector('.item3__circleAdditionPhone2').classList.remove('none');
    phoneItem4AdditionCircle.classList.remove('item4__circleAdditionPhone2-opened');
    //закриваємо item1-2
    phoneItem1.classList.remove('information-container-phone__item1-opened');
    phoneItem1Text.classList.remove('item1__textPhone-opened');
    phoneArrow1.classList.remove('item1__arrow-opened');
    phoneItem2.classList.remove('information-container-phone__item2-opened');
    phoneItem2Text.classList.remove('item2__textPhone-opened');
    phoneArrow2.classList.remove('item2__arrow-opened');
}
function changePhoneItem4() {
    if (phoneArrow4.classList.contains('item4__arrowPhone-opened')) {
        ItemContainer3_4.classList.remove('information-container-phone__item3-4-opened');
    } else {
        ItemContainer3_4.classList.add('information-container-phone__item3-4-opened');
    }
    phoneItem4.classList.toggle('item3-4__item4Phone-opened')
    phoneItem4Text.classList.toggle('item4__textPhone-opened')
    phoneItem4UpperCircle.classList.toggle('item4__circlePhone1-opened');
    phoneItem2RightLongLine.classList.toggle('item2__longLine-right-opened')
    phoneItem2RightShortLine.classList.toggle('item2__shortLine-right-opened')
    phoneArrow4.classList.toggle('item4__arrowPhone-opened');
    document.querySelector('.item3__circlePhone2').classList.toggle('none');
    document.querySelector('.item3__circleAdditionPhone2').classList.toggle('none');
    phoneItem4AdditionCircle.classList.toggle('item4__circleAdditionPhone2-opened');
    //закриваємо item3
    phoneItem3.classList.remove('item3-4__item3Phone-opened')
    phoneItem3Text.classList.remove('item3__textPhone-opened')
    phoneItem3UpperCircle.classList.remove('item3__circlePhone1-opened');
    phoneItem2LeftLongLine.classList.remove('item2__longLine-left-opened');
    phoneItem2LeftShortLine.classList.remove('item2__shortLine-left-opened')
    phoneArrow3.classList.remove('item3__arrowPhone-opened');
    document.querySelector('.item4__circlePhone2').classList.remove('none');
    document.querySelector('.item4__circleAdditionPhone2').classList.remove('none');
    phoneItem3AdditionCircle.classList.remove('item3__circleAdditionPhone2-opened');
    //закриваємо item1-2
    phoneItem1.classList.remove('information-container-phone__item1-opened');
    phoneItem1Text.classList.remove('item1__textPhone-opened');
    phoneArrow1.classList.remove('item1__arrow-opened');
    phoneItem2.classList.remove('information-container-phone__item2-opened');
    phoneItem2Text.classList.remove('item2__textPhone-opened');
    phoneArrow2.classList.remove('item2__arrow-opened');
}
const cardContainer = document.querySelector(".cards__container");
const cards = document.querySelector(".cards");
let menuItem1 = document.getElementById('menuItem1')
let menuItem2 = document.getElementById('menuItem2')
let menuItem3 = document.getElementById('menuItem3')
let menuItem1arrow = document.getElementById('sec4__arrow1');
let menuItem2arrow = document.getElementById('sec4__arrow2');
let menuItem3arrow = document.getElementById('sec4__arrow3');
function changeSec4Arrow1() {
    menuItem1.classList.toggle('part2__menuItem-opened')
    menuItem1arrow.classList.toggle('menuItem__arrow-opened');
    menuItem2.classList.remove('part2__menuItem-opened')
    menuItem2arrow.classList.remove('menuItem__arrow-opened');
    menuItem3.classList.remove('part2__menuItem-opened')
    menuItem3arrow.classList.remove('menuItem__arrow-opened');
}
function changeSec4Arrow2() {
    menuItem2.classList.toggle('part2__menuItem-opened')
    menuItem2arrow.classList.toggle('menuItem__arrow-opened');
    menuItem1.classList.remove('part2__menuItem-opened')
    menuItem1arrow.classList.remove('menuItem__arrow-opened');
    menuItem3.classList.remove('part2__menuItem-opened')
    menuItem3arrow.classList.remove('menuItem__arrow-opened');
}
function changeSec4Arrow3() {
    menuItem3.classList.toggle('part2__menuItem-opened')
    menuItem3arrow.classList.toggle('menuItem__arrow-opened');
    menuItem1.classList.remove('part2__menuItem-opened')
    menuItem1arrow.classList.remove('menuItem__arrow-opened');
    menuItem2.classList.remove('part2__menuItem-opened')
    menuItem2arrow.classList.remove('menuItem__arrow-opened');

}

new Swiper('.div-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.div-slider'
    },
    direction: 'vertical',
    initialSlide: 0

},
);
let menu = ["01 2022", "02 2022", "03 2022", "04 2022"];
let swiper2 = new Swiper('.div-slider2', {
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2'
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class=" ' + className + ' ">' + (menu[index]) + '</span>'
        }

    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.div-slider2'
    },
    initialSlide: 1
},
);

let swiper1 = new Swiper('.div-slider-first', {
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.div-slider-first',
    },
    releaseOnEdges: true,
    pagination: {
        el: '.swiper-pagination_in_phone',
        clickable: true
    },
    preventInteractionOnTransition: true,
    initialSlide: 0
},
);
// swiper2.on('slideChange', function () {
// console.log(this.activeIndex)
// if(this.activeIndex == 1 || this.activeIndex == 2 || this.activeIndex == 3 ){
//     document.querySelector('.body').classList.add('stopScroll')
  
//      console.log('not 4')
//  }
// if(this.activeIndex === 3){
//     document.querySelector('.body').classList.add('goScroll')

        
//     console.log('mouse 4')
// }

// });
//повертаємо карточки на дефолтні місця
window.addEventListener('scroll', () => {

    if (window.innerWidth > 1160) {
        if (pageYOffset > 1600 || pageYOffset < 100) {
            swiper1.slideTo(0)
        }
        if (pageYOffset > 4200 || pageYOffset < 2300 ) {
            swiper2.enable()
           
            swiper2.init()
            swiper2.slideTo(1)
        }
    }
    if (window.innerWidth < 1160) {
        if (pageYOffset > 1415 || pageYOffset < 50 ) {
            swiper1.slideTo(0)
        }
        if (pageYOffset > 3500 || pageYOffset< 1550 ) {
            swiper2.enable()
            swiper2.init()
            swiper2.slideTo(1)
        }
    }


})
window.addEventListener('touchmove', function (e) {
    if (pageYOffset > 1340 || pageYOffset < 30) {
        swiper1.slideTo(0)
    }
    if (pageYOffset > 3200 || pageYOffset < 1700) {
        swiper2.slideTo(1)
    }
})

let audio = document.getElementById("audio");
let video = document.getElementById("video");

console.log(audio.paused)
//audio
function play() {
     if(audio.paused){
        audio.play();
        video.play();
        console.log(audio.paused)
     }else{
        audio.pause();
        video.pause();
        console.log(audio.paused)
     }

    
  }
