

function sendMsg(e){
const name = document.querySelector('.name__form');
const number = document.querySelector('.number__form');
const email = document.querySelector('.email__form');
let templateParams = {
    name: name.value,
    number:number.value,
    email:email.value
};
 
emailjs.send('service_khow86x','template_kdk3imk', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
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
button.addEventListener('click',sendMsg)

function sendMsg2(e){
    const name = document.querySelector('.name__form2');
    const number = document.querySelector('.number__form2');
    const email = document.querySelector('.email__form2');
    let templateParams = {
        name: name.value,
        number:number.value,
        email:email.value
    };
     
    emailjs.send('service_khow86x','template_kdk3imk', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
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
    button2.addEventListener('click',sendMsg2)