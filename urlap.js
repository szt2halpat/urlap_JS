let NameError = document.getElementById('nameError');
let BirthError = document.getElementById('birthError');
let EmailError = document.getElementById('emailError');
let PasswordError = document.getElementById('passwordError');

let ToolTipText = document.querySelector('.tooltip-text');
let Kerdojel = document.querySelector('.fa-question');
let Hiba = document.querySelector('input');

//let allError = document.getElementById('allError');

const NameRegEx = /^([A-Z]([a-záéúőóüö.]+\s?)){2,}$/gm;


function NameValidation()
{
    let nev = document.getElementById('fullname').value;

    if(!nev.match(NameRegEx))
    {
        //NameError.innerHTML = 'RegEx probléma';
        ToolTipText.innerText = 'asdasd';
        Kerdojel.style.visibility = 'visible';
        Hiba.style.borderBottom = "1px solid red";
        return false;
    }
    //NameError.innerText = 'minden jo';
    ToolTipText.innerText = '';
    Kerdojel.style.visibility = 'hidden';
    Hiba.style.borderBottom = "1px solid green";

    return true;

}

window.onload
{
    console.log("betöltve.");
    Kerdojel.style.visibility = "hidden";
}