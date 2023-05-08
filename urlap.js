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
    let Fieldset = document.getElementById('fieldset01');
    let Gomb = document.getElementById('kuldes');


    let jelszo = "jelszo";

    if(!InputName.match(NameRegEx) || !InputBirth.match(BirthRegEx) || !InputEmail.match(EmailRegEx) || InputPasswd !== jelszo)
    {
        alert("Sikertelen küldés.");
        Fieldset.style.display = 'none';
        Gomb.disabled = 'false';
        return false;
    }
    alert("Sikeres küldés.");
    Gomb.disabled = 'true';
    Fieldset.style.display = 'block';
    return true;



}

let value;

function Next()
{
    let Fieldset01 = document.getElementById('fieldset01');
    let Fieldset02 = document.getElementById('fieldset02');
    let Fieldset03 = document.getElementById('fieldset03');

    if(Fieldset01.style.display === 'block')
    {
        Fieldset02.style.display = 'block';
        Fieldset01.style.display = 'none';
    }
    else if(Fieldset02.style.display === 'block')
    {
        Fieldset01.style.display = 'none';
        Fieldset02.style.display = 'none';
        Fieldset03.style.display = 'block';

    }
    else if(Fieldset03.style.display === 'block')
    {
        Fieldset01.style.display = 'none';
        Fieldset02.style.display = 'none';
    }


    let GetSelectedValue = document.querySelector('input[name="drone"]:checked')

    if(GetSelectedValue)
    {
        value = GetSelectedValue.value;
    }

    let GetSelectedValue2 = document.querySelector('input[name="masodik"]:checked')

    if(GetSelectedValue2)
    {
        value = GetSelectedValue2.value;
    }


    /*
    if(document.getElementById('egy').checked)
    {
        value = document.getElementById('egy').value;
    }
    else if(document.getElementById('ketto').checked)
    {
        value = document.getElementById('ketto').value;
    }
    */
    console.log(GetSelectedValue.value);



}
function Previous()
{
    let Fieldset01 = document.getElementById('fieldset01');
    let Fieldset02 = document.getElementById('fieldset02');
    let Fieldset03 = document.getElementById('fieldset03');

    if(Fieldset03.style.display === 'block')
    {
        Fieldset02.style.display = 'block';
        Fieldset03.style.display = 'none';
    }
    else if(Fieldset02.style.display === 'block')
    {
        Fieldset01.style.display = 'block';
        Fieldset02.style.display = 'none';
    }

}

function Check()
{
    console.log(value);
}

window.onload
{
    console.log("betöltve.");
    Kerdojel.style.visibility = "hidden";
}