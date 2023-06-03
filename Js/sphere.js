const sphere = document.querySelector('.middleanimation');
window.addEventListener('scroll', () => {
    // console.log(pageYOffset)
    if (window.innerWidth >1160) {
       console.log(pageYOffset)
        if (pageYOffset > 600) {
            sphere.classList.add('sphere-second-section')
        } else {
            sphere.classList.remove('sphere-second-section')
        }
        if (pageYOffset > 1200) {
            sphere.classList.add('sphere-third-section')
        } else {
            sphere.classList.remove('sphere-third-section')
        }
        if (pageYOffset > 2000) {
            sphere.classList.add('sphere-fourth-section')
        } else {
            sphere.classList.remove('sphere-fourth-section')
        }
        if (pageYOffset > 2800) {
            sphere.classList.add('sphere-fifth-section')
        } else {
            sphere.classList.remove('sphere-fifth-section')
        }
        if (pageYOffset > 3900) {
            sphere.classList.add('sphere-sixth-section')
        } else {
            sphere.classList.remove('sphere-sixth-section')
        }
        if (pageYOffset > 5000) {
            sphere.classList.add('sphere-seventh-section')
        } else {
            sphere.classList.remove('sphere-seventh-section')
        }
    }else{
        if (window.innerWidth >850) {
            if (pageYOffset > 300) {
                sphere.classList.add('sphere-second-section')
            } else {
                sphere.classList.remove('sphere-second-section')
            }
            if (pageYOffset > 800) {
                sphere.classList.add('sphere-third-section')
            } else {
                sphere.classList.remove('sphere-third-section')
            }
            if (pageYOffset > 1300) {
                sphere.classList.add('sphere-fourth-section')
            } else {
                sphere.classList.remove('sphere-fourth-section')
            }
            if (pageYOffset > 2100) {
                sphere.classList.add('sphere-fifth-section')
            } else {
                sphere.classList.remove('sphere-fifth-section')
            }
            if (pageYOffset > 2850) {
                sphere.classList.add('sphere-sixth-section')
            } else {
                sphere.classList.remove('sphere-sixth-section')
            }
            if (pageYOffset > 4000) {
                sphere.classList.add('sphere-seventh-section')
            } else {
                sphere.classList.remove('sphere-seventh-section')
            }
        }

    }
    if (window.innerWidth < 850) {
        sphere.classList.add('mobile__sphere')
    }
})