const mask1 = document.querySelector('#mask1');
const mask2 = document.querySelector('#mask2');
const mask3 = document.querySelector('#mask3');
const mask4 = document.querySelector('#mask4');
const mask5 = document.querySelector('#mask5');
const mask6 = document.querySelector('#mask6');
const mask7 = document.querySelector('#mask7');
const mask8 = document.querySelector('#mask8');

window.addEventListener('scroll', function (e) {
    if (window.innerWidth > 850) {
        if (pageYOffset > 2700) {
            mask1.classList.add('mask-changed');
        } else {
            mask1.classList.remove('mask-changed');
        }
        if (pageYOffset > 2725) {
            mask2.classList.add('mask-changed');
        } else {
            mask2.classList.remove('mask-changed');
        }
        if (pageYOffset > 2750) {
            mask3.classList.add('mask-changed');
        } else {
            mask3.classList.remove('mask-changed');
        }
        if (pageYOffset > 2800) {
            mask4.classList.add('mask-changed');
        } else {
            mask4.classList.remove('mask-changed');
        }
        if (pageYOffset > 2825) {
            mask5.classList.add('mask-changed');
        } else {
            mask5.classList.remove('mask-changed');
        }
        if (pageYOffset > 2850) {
            mask6.classList.add('mask-changed');
        } else {
            mask6.classList.remove('mask-changed');
        }
        if (pageYOffset > 2875) {
            mask7.classList.add('mask-changed');
        } else {
            mask7.classList.remove('mask-changed');
        }
        if (pageYOffset > 2900) {
            mask8.classList.add('mask-changed');
        } else {
            mask8.classList.remove('mask-changed');
        }
    }
    if (window.innerWidth > 1160) {
        if (pageYOffset > 3700) {
            mask1.classList.add('mask-changed');
        } else {
            mask1.classList.remove('mask-changed');
        }
        if (pageYOffset > 3725) {
            mask2.classList.add('mask-changed');
        } else {
            mask2.classList.remove('mask-changed');
        }
        if (pageYOffset > 3750) {
            mask3.classList.add('mask-changed');
        } else {
            mask3.classList.remove('mask-changed');
        }
        if (pageYOffset > 3775) {
            mask4.classList.add('mask-changed');
        } else {
            mask4.classList.remove('mask-changed');
        }
        if (pageYOffset > 3800) {
            mask5.classList.add('mask-changed');
        } else {
            mask5.classList.remove('mask-changed');
        }
        if (pageYOffset > 3825) {
            mask6.classList.add('mask-changed');
        } else {
            mask6.classList.remove('mask-changed');
        }
        if (pageYOffset > 3850) {
            mask7.classList.add('mask-changed');
        } else {
            mask7.classList.remove('mask-changed');
        }
        if (pageYOffset > 3875) {
            mask8.classList.add('mask-changed');
        } else {
            mask8.classList.remove('mask-changed');
        }
    }


})

window.addEventListener('touchstart', function (e) {
    if (window.innerWidth < 850) {
        if (pageYOffset > 2775) {
            mask1.classList.add('mask-changed');
        } else {
            mask1.classList.remove('mask-changed');
        }
        if (pageYOffset > 2800) {
            mask2.classList.add('mask-changed');
        } else {
            mask2.classList.remove('mask-changed');
        }
        if (pageYOffset > 2825) {
            mask3.classList.add('mask-changed');
        } else {
            mask3.classList.remove('mask-changed');
        }
        if (pageYOffset > 2850) {
            mask4.classList.add('mask-changed');
        } else {
            mask4.classList.remove('mask-changed');
        }
        if (pageYOffset > 2875) {
            mask5.classList.add('mask-changed');
        } else {
            mask5.classList.remove('mask-changed');
        }
        if (pageYOffset > 2900) {
            mask6.classList.add('mask-changed');
        } else {
            mask6.classList.remove('mask-changed');
        }
        if (pageYOffset > 2925) {
            mask7.classList.add('mask-changed');
        } else {
            mask7.classList.remove('mask-changed');
        }
        if (pageYOffset > 2950) {
            mask8.classList.add('mask-changed');
        } else {
            mask8.classList.remove('mask-changed');
        }
    }
})

