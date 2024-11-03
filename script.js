document.addEventListener('DOMContentLoaded', (event) => {
//Form
const formulario = document.querySelector('.formulario');
const title = document.querySelector('h1');
const container = document.querySelector('.container')

//Input's
const nome = document.getElementById('name');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const radioButtons = document.querySelectorAll('input[name="query"]');
const checkbox = document.getElementById('checkbox');
const textarea = document.getElementById('textarea');

//Error messages
const messageFieldName = document.getElementById('messageFieldName');
const messageFieldLastName = document.getElementById('messageFieldLastName');
const messageEmail = document.getElementById('messageEmail');
const messageQueryType = document.getElementById('messageQueryType');
const messageTextArea = document.getElementById('messageTextArea');
const messageCheckBox = document.getElementById('messageCheckBox');


function envioFormulario(event) {
  event.preventDefault();
  
  let formValid = true;

  messageFieldName.innerText = '';
  messageFieldLastName.innerText = '';
  messageEmail.innerText = '';
  messageTextArea.innerText = '';
  messageQueryType.innerText = '';
  messageCheckBox.innerText = '';

 if (nome.value === "") {
  messageFieldName.innerText = 'This field is required';
  formValid = false;
 } else if(nome.value === true) {
  messageFieldName.innerText = "";
 } else {
  messageFieldName.innerText = 'This field is required';
 }

 if (lastName.value === "") {
  messageFieldLastName.innerText = 'This field is required';
  formValid = false;
 }

 if (email.value === "") {
  messageEmail.innerText = 'Please enter a valid email address ';
  formValid = false;
 } else if (!email.checkValidity()) {
  messageEmail.innerText = 'Please enter a valid email address '
  formValid = false;
 }

 if (textarea.value === "") {
  messageTextArea.innerText = 'This field is required';
  formValid = false;
 }

 let radioChecked = Array.from(radioButtons).some(radio => radio.checked);
 
  if (!radioChecked) {
    messageQueryType.innerText = 'Please select a query type'
    formValid = false;
  }

  if (checkbox && !checkbox.checked) {
    messageCheckBox.innerText = 'To submit this form, please consent to being contacted'
    formValid = false;
  }

  if(formValid) {
    formulario.innerHTML = "<h1 style='color: var(--green600medium);'> Message Sent!</h1> <p style = >Thanks for completing the form. We'll be in touch soon</p>"
    formulario.style.display = 'block'
    container.style.height = '100px'
    container.style.width = '400px'
    title.style.display = 'none';
  }
}

formulario.addEventListener('submit', envioFormulario);
});