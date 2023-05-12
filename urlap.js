let NameError = document.getElementById('nameError');
let BirthError = document.getElementById('birthError');
let EmailError = document.getElementById('emailError');
let PasswordError = document.getElementById('passwordError');

let score = 0;

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

function CheckAnswers()
{
    //Gomb

    let gomb = document.getElementById('CheckAnswers');


    // Radio button ellenőrzés

    let isRadioValid = false;

    let radio = document.querySelector('input[name="prog"]:checked');

    let RadioValue = radio.value;

    const RadioAnswer = "python"


    if(RadioValue === RadioAnswer)
    {
        console.log("Python")
        isRadioValid = true;
        score++;
    }
    else
    {
        isRadioValid = false;
    }

    console.log("RADIO",isRadioValid)

    //Checkbox ellenőrzés

    let isCheckBoxValid = false;


    let GoodCheckBoxes = document.querySelectorAll('input[name="check"]');
    let BadCheckBoxes = document.querySelectorAll('input[name="rossz"]');

    console.log("good",GoodCheckBoxes)

    if (GoodCheckBoxes[0].checked && GoodCheckBoxes[1].checked) {
        isCheckBoxValid = true;
        score++;
    }
    else
    {
        isCheckBoxValid = false;
    }

    for (let i = 0; i < BadCheckBoxes.length; i++) {
        if (BadCheckBoxes[i].checked) {
            isCheckBoxValid = false;
            break;
        }
    }

    console.log("CHECKBOX",isCheckBoxValid)

    //Text ellenőrzés

    let isTextValid = false;

    const TextValue = document.getElementById("TextValasz").value.trim();

    let TextAnswer = "1996";

    //TextAnswer = TextAnswer.replace(/\s+/g, ' ').trim();

    if(TextValue === TextAnswer)
    {
        isTextValid = true;
        score++;
    }
    else {
        isTextValid = false;
    }

    console.log("TEXT",isTextValid)



    //Textarea ellenőrzés

    let isTextAreaValid = false;

    let megadottValasz = document.getElementById('textarea').value;
    let elfogadottValasz = "objektum orientált programozás";

    megadottValasz = megadottValasz.replace(/\s+/g, ' ').trim().toLowerCase();

    if (megadottValasz === elfogadottValasz) {
        document.getElementById('textarea').style.border = "2px solid green";
        score++;
        isTextAreaValid = true;
    } else {
        document.getElementById('textarea').style.border = "2px solid red";
        isTextAreaValid = false;
    }

    console.log("TEXTAREA", isTextAreaValid)


    //GOMB, INPUTOK LETILTÁSA
    gomb.disabled = true;

    let Radio = document.querySelectorAll('input[name="prog"]');

    for(let i = 0; i < Radio.length; i++)
    {
        Radio[i].disabled = true;
    }

    let GoodBoxes = document.querySelectorAll('input[name="check"]');
    let BadBoxes = document.querySelectorAll('input[name="rossz"]');

    for(let i = 0; i < GoodBoxes.length; i++)
    {
        GoodBoxes[i].disabled = true;
    }

    for(let i = 0; i < BadBoxes.length; i++)
    {
        BadBoxes[i].disabled = true;
    }


    const Text = document.getElementById('TextValasz')

    Text.disabled = true;

    const TextArea = document.getElementById('textarea')

    TextArea.disabled = true;

    const FirstSelect = document.getElementById("kiegeszito1");

    FirstSelect.disabled = true;

    const SecondSelect = document.getElementById("kiegeszito2");

    SecondSelect.disabled = true;

    Select();

    //VÉGEREDMÉNY KIÍRATÁS

    const vegeredmeny = document.getElementById('vegeredmeny');
    const MaxPontszam = 6;


    const SzazelakosArany = Math.round((score / MaxPontszam) * 100)

    vegeredmeny.innerText = "\nEredmény: 6/" + score + " pont\n"+"Százalékos arány: " + SzazelakosArany + "%";

}

function Select()
{
    let isFirstSelectValid = false;


    const ValasztottElem = document.getElementById("kiegeszito1");
    let ValasztottErtek = ValasztottElem.value;
    console.log(ValasztottErtek)
    let Valasz = "React"
    const eredmenyElem = document.getElementsByClassName('eredmeny')[0];

    if (ValasztottErtek !== "") {
        eredmenyElem.textContent = "Válasz: " + ValasztottErtek;
        isFirstSelectValid = true;
    }
    else{
        eredmenyElem.textContent = "Nincs kiválasztva.";
        isFirstSelectValid = false;
    }

    if(ValasztottErtek === Valasz)
    {
        score++;
    }

    console.log("ELSŐ",isFirstSelectValid)

    //Második választás

    let isSecondSelectValid = false;

    const ValasztottElem2 = document.getElementById("kiegeszito2");
    let ValasztottErtek2 = ValasztottElem2.value;
    let MasodikValasz = "MySQL"
    const eredmenyElem2 = document.getElementsByClassName('eredmeny')[1];

    if (ValasztottErtek2 !== "") {
        eredmenyElem2.textContent = "Válasz: " + ValasztottErtek2;
        isSecondSelectValid = true;

    } else {
        eredmenyElem2.textContent = "Nincs kiválasztva.";
        isSecondSelectValid = false;
    }

    if(ValasztottErtek2 === MasodikValasz)
    {
        score++;
    }

    console.log("MÁSODIK",isSecondSelectValid)


}

function CheckAll() {

    let isRadioChecked = false;
    let isCheckBoxGoodChecked = false;
    let isCheckBoxBadChecked = false;
    let isTextValid = false;
    let isTextAreaValid = false;
    let isFirstSelectValid = false;
    let isSecondSelectValid = false;
    let isCheckBoxValid = false;

    let gomb = document.getElementById('CheckAnswers');

    // Elemek referencia megszerzése
    const option = document.querySelectorAll('input[name="prog"]')
    const checkbox = document.querySelectorAll('input[name="check"]')
    const checkbox2 = document.querySelectorAll('input[name="rossz"]')
    const text = document.getElementById('TextValasz')
    const textarea = document.getElementById('textarea')

    let szamlalo = 0;


    const FirstSelect = document.getElementById("kiegeszito1");
    const SecondSelect = document.getElementById("kiegeszito2");

    for (let i = 0; i < option.length; i++) {
        if (option[i].checked) {
            isRadioChecked = true;
            break;
        }
    }


    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            szamlalo++;
        }
    }


    for (let i = 0; i < checkbox2.length; i++) {
        if (checkbox2[i].checked) {
            szamlalo++;
    }

    }
    if(szamlalo >= 2)
    {
        isCheckBoxValid = true;
    }



    if (text.value.trim() === "") {
        isTextValid = false;
    }
    else
    {
        isTextValid = true;
    }

    if(textarea.value.trim() === "")
    {
        isTextAreaValid = false;
    }
    else
    {
        isTextAreaValid = true;
    }

    if(FirstSelect.value == "")
    {
        isFirstSelectValid = false;
    }
    else {
        isFirstSelectValid = true;
    }
    if(SecondSelect.value == "")
    {
        isSecondSelectValid = false;
    }
    else
    {
        isSecondSelectValid = true;
    }
    if(isRadioChecked && isTextValid && isTextAreaValid && isFirstSelectValid && isSecondSelectValid && isCheckBoxValid)
    {
        gomb.disabled = false;
        console.log("Gomb disabled false")
    }
    else
    {
        gomb.disabled = true;
        console.log("Gomb disabled true")
    }

}

window.onload
{
    console.log("betöltve.");
    Kerdojel.style.visibility = "hidden";
    let gomb = document.getElementById('CheckAnswers');
    gomb.disabled = true;

}