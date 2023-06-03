const okButton = document.querySelector('.formPopUp__button');
const formPopUp = document.querySelector('.formPopUp')
okButton.addEventListener('click',function(){
    console.log('33')
    formPopUp.classList.add('none')
})
const okFeilButton = document.querySelector('.formPopUpFail__button');
const formFeilPopUp = document.querySelector('.formPopUpFail')
okFeilButton.addEventListener('click',function(){
    formFeilPopUp.classList.add('none')
})

function sendMsg(e) {
    const name = document.querySelector('.contact-form__name');
    const number = document.querySelector('.contact-form__phone');
    const email = document.querySelector('.contact-form__email');
 
    let templateParams = {
        name: name.value,
        number: number.value,
        email: email.value
    };

    emailjs.send('service_khow86x', 'template_kdk3imk', templateParams)
        .then(function (response) {
            
            console.log('SUCCESS!', response.status, response.text);
            formPopUp.classList.remove('none')
            setTimeout(() => {
                formPopUp.classList.add('none')
            }, 5000)

        }, function (error) {
            formFeilPopUp.classList.remove('none')
            setTimeout(() => {
                formFeilPopUp.classList.add('none')
            }, 5000)
            console.log('FAILED...', error);
        });
    name.value = '';
    number.value = '';
    email.value = '';
    button.classList.add('disabled');
    setTimeout(() => {
        button.classList.remove('disabled');
    }, 5000)
}
const button = document.getElementById('button')
button.addEventListener('click', sendMsg)

function sendMsg2(e) {
    const name = document.querySelector('.form__name');
    const number = document.querySelector('.form__number');
    const email = document.querySelector('.form__email');
    let templateParams = {
        name: name.value,
        number: number.value,
        email: email.value
    };

    emailjs.send('service_khow86x', 'template_kdk3imk', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            formPopUp.classList.remove('none')
            setTimeout(() => {
                formPopUp.classList.add('none')
            }, 5000)
        }, function (error) {
            formFeilPopUp.classList.remove('none')
            setTimeout(() => {
                formFeilPopUp.classList.add('none')
            }, 5000)
            console.log('FAILED...', error);
            console.log('FAILED...', error);
        });
    name.value = '';
    number.value = '';
    email.value = '';
    button.classList.add('disabled');
    setTimeout(() => {
        button.classList.remove('disabled');
    }, 5000)
}
const button2 = document.getElementById('button2')
button2.addEventListener('click', sendMsg2)