let answers = [
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:''},
  {question:'',answer:{
         name:'',
         email:'',
         number:'',
  }},
  {question:'English',answer:'no',level:'did not choose this language'},
  {question:'Spanish',answer:'no',level:'did not choose this language'},
  {question:'French',answer:'no',level:'did not choose this language'},
  {question:'Polish',answer:'no',level:'did not choose this language'},
]
let finalBlock = document.querySelector('.final_block');
let finalBlockText1 = document.querySelector('.final_block-text1')
let finalBlockText2 = document.querySelector('.final_block-text2')
document.querySelector('.arrowBackHome').addEventListener(
  'click',()=>{
            document.querySelector('.escape-popUp').style.visibility = 'visible';
            setTimeout(() => {
              document.querySelector('.escape-popUp').style.visibility = 'hidden';
            },4000);
  })

let number = 0 ;
let quizContainer = document.querySelector('.quiz-section');
let pagesPresentation = document.querySelectorAll('.page_number');
for(let l = 0;l<pagesPresentation.length;l++){
  pagesPresentation[l].innerHTML = `${number+1}/${quizContainer.children.length}`
}


function nextQuestion(){
  console.log(number, quizContainer.children.length)
  if(number+1 ===  quizContainer.children.length && number !== 31){
     if( quizContainer.children[number].querySelector('.clicked') !== null){
      finalBlockText1.innerText = `Happy to get to know you, dear ${answers[31].answer.name}!`;
      finalBlockText2.
      innerText = `
       Very soon you will join our big family and meet your
       Perfect Matches to become fluent in ${answers[32].answer === 'Yes'? ' English ' : ''} ${answers[33].answer === 'Yes'? ' Spanish ' : ''}   ${answers[34].answer === 'Yes'? ' French ' : ''} ${answers[35].answer === 'Yes'? ' Polish ' : ''} together!
       `;
      console.log('finish') 
      finalBlock.style.display = 'flex';
      quizContainer.style.display= 'none';
      document.querySelector('.arrowBackHome').style.display = 'none';
      document.querySelector('.user-security').style.display = 'none';
      document.querySelector('.footer_test').style.display = 'none';
      document.querySelector('.header-container').style.display = 'flex';
     }else{
      document.querySelector('.empty-field-warning').innerText = 'choose an answer'
      document.querySelector('.empty-field-warning').classList.remove('none');
      setTimeout(() => {
        document.querySelector('.empty-field-warning').classList.add('none');
      }, 2000);
     }
  
  }
  if(number === 31){
    if(quizContainer.children[number].querySelectorAll('.clicked').length !== 0){
     number++;
     quizContainer.children[number - 1].classList.add('none');
       quizContainer.children[number].classList.remove('none');
       for(let l = 0;l<pagesPresentation.length;l++){
         pagesPresentation[l].innerHTML = `${number+1}/${quizContainer.children.length}`
       }
    }else{
     document.querySelector('.empty-field-warning').innerText = 'choose at list one'
      document.querySelector('.empty-field-warning').classList.remove('none');
      setTimeout(() => {
        document.querySelector('.empty-field-warning').classList.add('none');
      }, 2000);
    }
  }

  if (number + 1 < quizContainer.children.length ) {

    if(number < 31){
     if(quizContainer.children[number].querySelector('.clicked') !== null){
      //додаємо значення в список
     console.log(quizContainer.children[number].querySelector('.clicked').value)
      answers[number].answer = quizContainer.children[number].querySelector('.clicked').value
      console.log(answers)
     //
    number++;
    console.log('click')
    quizContainer.children[number - 1].classList.add('none');
    quizContainer.children[number].classList.remove('none');
    for(let l = 0;l<pagesPresentation.length;l++){
      pagesPresentation[l].innerHTML = `${number+1}/${quizContainer.children.length}`
    }
   }else{
    document.querySelector('.empty-field-warning').innerText = 'choose an answer'
    document.querySelector('.empty-field-warning').classList.remove('none');
    setTimeout(() => {
      document.querySelector('.empty-field-warning').classList.add('none');
    }, 2000);
   }
  }
  if(number === 31){
     if(quizContainer.children[number].querySelectorAll('.filled').length === 3){
            //додаємо значення в список
    answers[31].answer.name =  quizContainer.children[number].querySelectorAll('.filled')[0].value;
    answers[31].answer.email =  quizContainer.children[number].querySelectorAll('.filled')[1].value;
    answers[31].answer.number =  quizContainer.children[number].querySelectorAll('.filled')[2].value;
    //
      number++;
      quizContainer.children[number - 1].classList.add('none');
        quizContainer.children[number].classList.remove('none');
        for(let l = 0;l<pagesPresentation.length;l++){
          pagesPresentation[l].innerHTML = `${number+1}/${quizContainer.children.length}`
        }
     }else{
      document.querySelector('.empty-field-warning').innerText = 'fill in all fields'
      document.querySelector('.empty-field-warning').classList.remove('none');
      setTimeout(() => {
        document.querySelector('.empty-field-warning').classList.add('none');
      }, 2000);
     }
  }
  if(number > 31){
    if(quizContainer.children[number].querySelector('.clicked') !== null){
        number++;
        console.log('click');
        quizContainer.children[number - 1].classList.add('none');
        quizContainer.children[number].classList.remove('none');
        for(let l = 0;l<pagesPresentation.length;l++){
          pagesPresentation[l].innerHTML = `${number+1}/${quizContainer.children.length}`
        }
       }else{
        document.querySelector('.empty-field-warning').innerText = 'choose an answer'
    document.querySelector('.empty-field-warning').classList.remove('none');
    setTimeout(() => {
      document.querySelector('.empty-field-warning').classList.add('none');
    }, 2000);
       } 
  }

  }
  if(number !== 0){
    document.querySelector('.back').classList.remove('unvisible');
  }
  if(number + 1 === quizContainer.children.length && number !== 32 ){
    document.querySelector('.next p').innerText = 'Finish';
  }
}
function previousQuestion(){
  document.querySelector('.next p').innerText = 'Forward';
  if (number !== 0) {
    console.log('click');
    quizContainer.children[number - 1].classList.remove('none');
    quizContainer.children[number].classList.add('none');
    number--;
    for(let l = 0;l<pagesPresentation.length;l++){
      pagesPresentation[l].innerHTML = `${number+1}/${quizContainer.children.length}`
    }
  }
  if(number === 0){
    document.querySelector('.back').classList.add('unvisible');
  }
}
const buttonsAhead = document.querySelectorAll('.next');
for (const button of buttonsAhead) {
  button.classList.add('next');
  button.addEventListener('click', () => {
    nextQuestion();
  })
}

const buttonsBack = document.querySelectorAll('.back');
for (const button of buttonsBack) {
  button.classList.add('back');
  button.addEventListener('click', () => {
    if (number !== 0) {
       previousQuestion();
    }
  })
}
const simpleInputs = document.getElementsByClassName('simple_input');
Array.prototype.forEach.call(simpleInputs, function (input) {
  input.addEventListener('click', () => {
    for (let child = 0; child < input.closest('form').children.length; child++) {
      input.closest('form')
        .children[child].classList.remove('clicked')
    }
    input.classList.add('clicked');
    
  })
}
);
const textInputs = document.getElementsByClassName('text_input');
Array.prototype.forEach.call(textInputs, function (input) {
  input.addEventListener('blur', () => {
    if(input.value.trim() !== ''){
        input.classList.add('filled')
    }else{
      input.classList.remove('filled')
    }
  })
}
);
let isEnglishSelected = false;
let isSpanishSelected = false;
let isFrenchSelected = false;
let isPolishSelected = false;
function setEnglish(){
  isEnglishSelected = !isEnglishSelected
  if(isEnglishSelected){
  answers[32].answer = 'Yes'
  }else{
    answers[32].answer = 'No'
    answers[32].level = 'did not choose this language'
  }
  console.log(answers[32])
}
function setSpanish(){
  isSpanishSelected = !isSpanishSelected
  if(isSpanishSelected){
    answers[33].answer = 'Yes'
    }else{
      answers[33].answer = 'No',
      answers[33].level = 'did not choose this language'
    }
    console.log(answers[33])
}
function setFrench(){
  isFrenchSelected = !isFrenchSelected
  if(isFrenchSelected){
    answers[34].answer = 'Yes'
    }else{
      answers[34].answer = 'No'
      answers[34].level = 'did not choose this language'
    }
    console.log(answers[34])
}
function setPolish(){
  isPolishSelected = !isPolishSelected
  if(isPolishSelected){
    answers[35].answer = 'Yes'
    }else{
      answers[35].answer = 'No'
      answers[35].level = 'did not choose this language'
    }
    console.log(answers[35])
}
const multipleChoiceForm = document.querySelector('.multiple_choice_form');
Array.prototype.forEach.call(multipleChoiceForm.childNodes, function (input) {
  input.addEventListener('click', () => {
    console.log(input.value)
    input.classList.toggle('clicked');
    
    if(!document.querySelector(`.${input.value}`)){
       quizContainer.appendChild(levelLanguage(input.value));
       for(let l = 0;l<pagesPresentation.length;l++){
        pagesPresentation[l].innerHTML = `${number+1}/${quizContainer.children.length}`
      }
    }else{
      document.querySelector(`.${input.value}`).remove()
      for(let l = 0;l<pagesPresentation.length;l++){
        pagesPresentation[l].innerHTML = `${number+1}/${quizContainer.children.length}`
      }
    }
  })
})
function toggleDropDown(e){
     e.target.closest('.languageLevelInputsContainer').classList.toggle('long-drop-down')
}

let levelLanguage = function (language) {
    
  let element = document.createElement('div');
   let iconLanguageContainer = document.createElement('div');
   iconLanguageContainer.classList.add('icon-language-container');
   let iconLanguageCircle = document.createElement('div');
   iconLanguageCircle.classList.add('icon-language-circle');
   iconLanguageContainer.appendChild(iconLanguageCircle);
   let innerLanguageIcon = document.createElement('div');
   innerLanguageIcon.classList.add('inner-language-icon');
   iconLanguageContainer.appendChild(innerLanguageIcon)
   element.appendChild(iconLanguageContainer);


  let elementHeader = document.createElement('div');
  elementHeader.innerHTML = `What level are you in ${language}?`;
  elementHeader.classList.add('question-header')
  element.appendChild(elementHeader);
  let elementInputsContainer = document.createElement('div');
  let currentLevel = 'A1-A2 (Beginner)';
  elementInputsContainer.innerHTML = `
  `;
  let levelPresentation = document.createElement('p');
  levelPresentation.innerText = currentLevel;
  levelPresentation.classList.add('level-presentation');
  let levelPresentationArrow = document.createElement('div');
  levelPresentationArrow.classList.add('levelPresentationArrow');
  levelPresentation.appendChild(levelPresentationArrow)
  levelPresentation.addEventListener('click',()=>{
    elementInputsContainer.classList.toggle('long-drop-down')
  })
  elementInputsContainer.appendChild(levelPresentation)

  let levelInput1 = document.createElement('input');
  levelInput1.type = 'button';
  levelInput1.value = 'A1-A2 (Beginner)';
  levelInput1.addEventListener('click',(e)=>{
    levelPresentation.innerText = levelInput1.value;
    if(language == 'English'){
      answers[32].level = levelInput1.value;
      console.log(answers[32])
  }
  if(language == 'Spanish'){
    answers[33].level = levelInput1.value;
    console.log(answers[33])
  }
  if(language == 'French'){
    answers[34].level = levelInput1.value;
    console.log(answers[34])   
  }
  if(language == 'Polish'){
    answers[35].level = levelInput1.value;
    console.log(answers[35])
  }
    let levelPresentationArrow = document.createElement('div');
    levelPresentationArrow.classList.add('levelPresentationArrow');
    levelPresentation.appendChild(levelPresentationArrow);
    for (let child = 0; child < levelInput1.closest('.languageLevelInputsContainer').children.length; child++) {
      levelInput1.closest('.languageLevelInputsContainer')
        .children[child].classList.remove('clicked')
    }
    levelInput1.classList.add('clicked');
    elementInputsContainer.classList.toggle('long-drop-down')
  })
  elementInputsContainer.appendChild(levelInput1);

  let levelInput2 = document.createElement('input');
  levelInput2.type = 'button';
  levelInput2.value = 'A2-B1 (Intermediate)';
  levelInput2.addEventListener('click',(e)=>{
    levelPresentation.innerText = levelInput2.value;
    if(language == 'English'){
      answers[32].level = levelInput2.value;
      console.log(answers[32])
  }
  if(language == 'Spanish'){
    answers[33].level = levelInput2.value;
    console.log(answers[33])
  }
  if(language == 'French'){
    answers[34].level = levelInput2.value;
    console.log(answers[34])   
  }
  if(language == 'Polish'){
    answers[35].level = levelInput2.value;
    console.log(answers[35])
  }
    let levelPresentationArrow = document.createElement('div');
    levelPresentationArrow.classList.add('levelPresentationArrow');
    levelPresentation.appendChild(levelPresentationArrow);
    
    for (let child = 0; child < levelInput2.closest('.languageLevelInputsContainer').children.length; child++) {
      levelInput2.closest('.languageLevelInputsContainer')
        .children[child].classList.remove('clicked')
    }
    levelInput2.classList.add('clicked');
    elementInputsContainer.classList.toggle('long-drop-down')
  })
  elementInputsContainer.appendChild(levelInput2);

    
  let levelInput3 = document.createElement('input');
  levelInput3.type = 'button';
  levelInput3.value = 'B1-B2 (Upper Intermediate)';
  levelInput3.addEventListener('click',(e)=>{
    levelPresentation.innerText = levelInput3.value;
    if(language == 'English'){
      answers[32].level = levelInput3.value;
      console.log(answers[32])
  }
  if(language == 'Spanish'){
    answers[33].level = levelInput3.value;
    console.log(answers[33])
  }
  if(language == 'French'){
    answers[34].level = levelInput3.value;
    console.log(answers[34])   
  }
  if(language == 'Polish'){
    answers[35].level = levelInput3.value;
    console.log(answers[35])
  }
    let levelPresentationArrow = document.createElement('div');
    levelPresentationArrow.classList.add('levelPresentationArrow');
    levelPresentation.appendChild(levelPresentationArrow);
    for (let child = 0; child < levelInput3.closest('.languageLevelInputsContainer').children.length; child++) {
      levelInput3.closest('.languageLevelInputsContainer')
        .children[child].classList.remove('clicked')
    }
    levelInput3.classList.add('clicked');
    elementInputsContainer.classList.toggle('long-drop-down')
  })
  elementInputsContainer.appendChild(levelInput3);

  let levelInput4 = document.createElement('input');
  levelInput4.type = 'button';
  levelInput4.value = 'B2-C1 (Advanced)';
  levelInput4.addEventListener('click',(e)=>{
    levelPresentation.innerText = levelInput4.value;
    if(language == 'English'){
      answers[32].level = levelInput4.value;
      console.log(answers[32])
  }
  if(language == 'Spanish'){
    answers[33].level = levelInput4.value;
    console.log(answers[33])
  }
  if(language == 'French'){
    answers[34].level = levelInput4.value;
    console.log(answers[34])   
  }
  if(language == 'Polish'){
    answers[35].level = levelInput4.value;
    console.log(answers[35])
  }
    let levelPresentationArrow = document.createElement('div');
    levelPresentationArrow.classList.add('levelPresentationArrow');
    levelPresentation.appendChild(levelPresentationArrow);

    for (let child = 0; child < levelInput4.closest('.languageLevelInputsContainer').children.length; child++) {
      levelInput4.closest('.languageLevelInputsContainer')
        .children[child].classList.remove('clicked')
    }

    levelInput4.classList.add('clicked');
    elementInputsContainer.classList.toggle('long-drop-down')
  })
  elementInputsContainer.appendChild(levelInput4);

  let levelInput5 = document.createElement('input');
  levelInput5.type = 'button';
  levelInput5.value = 'C1-C2 (Proficient)';
  levelInput5.addEventListener('click',(e)=>{
    
    console.log(number,language)
    if(language == 'English'){
        answers[32].level = levelInput5.value;
        console.log(answers[32])
    }
    if(language == 'Spanish'){
      answers[33].level = levelInput5.value;
      console.log(answers[33])
    }
    if(language == 'French'){
      answers[34].level = levelInput5.value;
      console.log(answers[34])   
    }
    if(language == 'Polish'){
      answers[35].level = levelInput5.value;
      console.log(answers[35])
    }

    levelPresentation.innerText = levelInput5.value;
    let levelPresentationArrow = document.createElement('div');
    levelPresentationArrow.classList.add('levelPresentationArrow');
    levelPresentation.appendChild(levelPresentationArrow);
    for (let child = 0; child < levelInput5.closest('.languageLevelInputsContainer').children.length; child++) {
      levelInput5.closest('.languageLevelInputsContainer')
        .children[child].classList.remove('clicked')
    }
    levelInput5.classList.add('clicked');
    elementInputsContainer.classList.toggle('long-drop-down')
  })
  elementInputsContainer.appendChild(levelInput5);
  elementInputsContainer.classList.add('languageLevelInputsContainer');
  element.appendChild(elementInputsContainer);
  element.classList.add(`${language.toString()}`)
  element.classList.add('none');
  element.classList.add('test-container');
  return element
    
}


//animations
