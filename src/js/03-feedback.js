import { throttle } from 'lodash';


const refs = {
    formEl: document.querySelector('.feedback-form'),
    textaria: document.querySelector('textarea')
};

const FORM_KEY = 'feedback-form-state';
let formData = {};

refs.formEl.addEventListener('input', throttle(onTextAreaInput, 500));
refs.formEl.addEventListener('submit', onSubmit);

returnSavedValue();

function onTextAreaInput(evt) {
    evt.preventDefault();

    const emailValue = refs.formEl.elements.email.value;
    const messageValue = refs.textaria.value;
    formData = { email: emailValue, message: messageValue };

    localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function returnSavedValue() {
    const saveInput = localStorage.getItem(FORM_KEY);
    if (saveInput) {
        const parsSaveInput = JSON.parse(saveInput);
        refs.formEl.elements.email.value = parsSaveInput.email || '';
        refs.textaria.value = parsSaveInput.message || '';
    }
}

function onSubmit(evt) {
    evt.preventDefault();

    const saveInput = localStorage.getItem(FORM_KEY);
    if (saveInput) {
        const parsSaveInput = JSON.parse(saveInput);
        console.log(parsSaveInput);
    }
    localStorage.removeItem(FORM_KEY);
    evt.currentTarget.reset();
}