let NameError = document.getElementById('nameError');
let BirthError = document.getElementById('birthError');
let EmailError = document.getElementById('emailError');
let PasswordError = document.getElementById('passwordError');

let ToolTipText = document.querySelector('.tooltip-text');
let Kerdojel = document.querySelector('.fa-question');


//let allError = document.getElementById('allError');

const NameRegEx = /^([A-Z]([a-záéúőóüö.]+\s?)){2,}$/gm;
const BirthRegEx = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/gm;
const EmailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

function NameValidation()
{
    let InputValue = document.getElementById('fullname').value;
    let InputField = document.getElementById('fullname');

    if(!InputValue.match(NameRegEx))
    {
        //NameError.innerHTML = 'RegEx probléma';
        ToolTipText.innerText = 'asdasd';
        Kerdojel.style.visibility = 'visible';
        InputField.style.borderBottom = "1px solid red";
        return false;
    }
    //NameError.innerText = 'minden jo';
    ToolTipText.innerText = '';
    Kerdojel.style.visibility = 'hidden';
    InputField.style.borderBottom = "1px solid green";

    return true;

}

function BirthValidation()
{
    let InputValue = document.getElementById('birth').value;
    let InputField = document.getElementById('birth');

    if(!InputValue.match(BirthRegEx))
    {
        InputField.style.borderBottom = "1px solid red";
        return false;
    }
    InputField.style.borderBottom = "1px solid green";
    return true;


}

function EmailValidation()
{
    let InputValue = document.getElementById('email').value;
    let InputField = document.getElementById('email');

    if(!InputValue.match(EmailRegEx))
    {
        InputField.style.borderBottom = "1px solid red";
        return false;
    }
    InputField.style.borderBottom = "1px solid green";
    return true;


}

function FormValidation()
{


    let InputName = document.getElementById('fullname').value;
    let InputBirth = document.getElementById('birth').value;
    let InputEmail = document.getElementById('email').value;
    let InputPasswd = document.getElementById('password').value;
    let Gomb = document.getElementById('kuldes');



    let jelszo = "jelszo";
    
    if(!InputName.match(NameRegEx) || !InputBirth.match(BirthRegEx) || !InputEmail.match(EmailRegEx) || InputPasswd !== jelszo)
    {
        alert("Sikertelen küldés.");
        return false;
    }
    alert("Sikeres küldés.");

    let FormContainer = document.getElementById('form');
    let TesztContainer = document.getElementById('teszt-container');

    FormContainer.style.animation = "zoom-out 1.5s linear";
    setTimeout(function ()
    {
        FormContainer.style.display = "none";
    },1200)

    TesztContainer.style.animation = "zoom-in 1.5s linear"
    setTimeout(function ()
    {
        TesztContainer.style.display = "block";
    },1000)
    return true;

}

function start()
{

    console.log("Teszt");

}

window.onload
{
    console.log("betöltve.");
    Kerdojel.style.visibility = "hidden";
}