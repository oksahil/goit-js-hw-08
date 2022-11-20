const form = document.querySelector(".feedback-form");
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const throttle = require('lodash.throttle');

form.addEventListener("submit", formSubmit);
form.addEventListener("input", throttle(formInputSave, 500));
window.addEventListener("DOMContentLoaded", readLocalStorage);

readLocalStorage();
function formInputSave(e) {
    try
    {
    const formElements = e.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;
    const formDataSave = {
        email,
        message,
      };
    const forms = localStorage.setItem('feedback-form-state', JSON.stringify(formDataSave));
        return forms;
    } catch
    {
        console.log("input all fields")
    }
}

function clearLocalStorage() {
   localStorage.clear(); 
}

function formSubmit(e) {
e.preventDefault();
    const formElements = e.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;
    if (email === "" || message === "") {
    return console.log("Please fill in all the fields!");
    }
    console.log(`Email: ${email}, message: ${message}`);
    form.reset();
    clearLocalStorage();
}

function readLocalStorage(forms) {
    try {
        formsTextContent = localStorage.getItem('feedback-form-state') || "";
        parseFormsTextContent = JSON.parse(formsTextContent) || "";
        email.value = parseFormsTextContent.email || "";
        message.value = parseFormsTextContent.message || "";
    } catch {
        console.log("input all fields")
    }
}

