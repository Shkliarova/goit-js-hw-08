import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmit);

let dataForm = {};

function onFormData(event){
    dataForm[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(dataForm));
}

function onSubmit(event){
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    event.preventDefault();
    event.currentTarget.reset();
    if (localStorage.getItem("feedback-form-state")) {
        localStorage.removeItem("feedback-form-state");
    }
}

function dataLocalStorage(){
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));
    const email = document.querySelector('.email');
    const message = document.querySelector('.message');
    if(data){
        email.value = data.email;
        message.value = data.message;
    }
}

dataLocalStorage();