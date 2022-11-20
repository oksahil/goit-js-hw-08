const form = document.querySelector(".feedback-form");
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const throttle = require('lodash.throttle');

form.addEventListener("submit", formSubmit);
form.addEventListener("input", throttle(formInputSave, 500));
document.addEventListener("DOMContentLoaded", readLocalStorage);

readLocalStorage();
function formInputSave(e) {
   
    const formElements = e.currentTarget.elements;
    // console.log(formElements);
    const emailValue = formElements.email.value;
    const messageValue = formElements.message.value;
    const formDataSave = {
        emailValue,
        messageValue,
      };
    const forms = localStorage.setItem('feedback-form-state', JSON.stringify(formDataSave));
        return forms;
      
}

function clearLocalStorage() {
   localStorage.clear(); 
}

function formSubmit(e) {
e.preventDefault();
    const formElements = e.currentTarget.elements;
    const emailValue = formElements.email.value;
    const messageValue = formElements.message.value;
    if (emailValue === "" || messageValue === "") {
    return console.log("Please fill in all the fields!");
    }
    console.log(`Email: ${emailValue}, message: ${messageValue}`);
    form.reset();
    clearLocalStorage();
}

function readLocalStorage(forms) {
    const formsTextContent = localStorage.getItem('feedback-form-state') || "";
    try {
        const parseFormsTextContent = JSON.parse(formsTextContent) || "";
        email.value = parseFormsTextContent.emailValue || "";
        message.value = parseFormsTextContent.messageValue || "";
    } catch
    {
        console.log("input all fields");
    }  
    
}
