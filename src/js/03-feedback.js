import { throttle } from 'lodash';


const refs = {
    formEl: document.querySelector('form'),
    textaria: document.querySelector('textarea')
}

const FORM_KEY = 'feedback-form-state';
const inputSavedText = {};

refs.formEl.addEventListener('input', throttle(onTextAreaInput, 500))

refs.formEl.addEventListener('input', evt => {
    inputSavedText[evt.target.name] = evt.target.value;
    localStorage.setItem(inputSavedText, JSON.stringify(inputSavedText));
})

function onTextAreaInput(evt) {
    const savedText = evt.target.value;
    localStorage.setItem(FORM_KEY, savedText);
}