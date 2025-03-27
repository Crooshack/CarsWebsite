
if (window.sessionStorage) {
    const form = document.querySelector('#form');
    const imie = document.querySelector("#imie");
    const nazwisko = document.querySelector("#nazwisko");
    const textarea = document.querySelector("#dodatki");


    if (sessionStorage.getItem("imieValue") !== null) {
        imie.value = sessionStorage.getItem("imieValue");
    }
    if (sessionStorage.getItem("nazwiskoValue") !== null) {
        nazwisko.value = sessionStorage.getItem("nazwiskoValue");
    }
    if (sessionStorage.getItem("emailValue") !== null) {
        email.value = sessionStorage.getItem("emailValue");
    }
    if (sessionStorage.getItem("textareaValue") !== null) {
        textarea.value = sessionStorage.getItem("textareaValue");
    }

    imie.addEventListener("input", e => {
        sessionStorage.setItem("imieValue", imie.value);
    });
    nazwisko.addEventListener("input", e => {
        sessionStorage.setItem("nazwiskoValue", nazwisko.value);
    });
    email.addEventListener("input", e => {
        sessionStorage.setItem("emailValue", email.value);
    });
    textarea.addEventListener("input", e => {
        sessionStorage.setItem("textareaValue", textarea.value);
    });



    form.addEventListener("submit", e => {
        sessionStorage.removeItem("textareaValue");
        sessionStorage.removeItem("imieValue");
        sessionStorage.removeItem("nazwiskoValue");
        sessionStorage.removeItem("emailValue");
    });

    form.addEventListener("reset", e => {
        sessionStorage.removeItem("textareaValue");
        sessionStorage.removeItem("imieValue");
        sessionStorage.removeItem("nazwiskoValue");
        sessionStorage.removeItem("emailValue");
    });
}

const paragraph = document.getElementById("paragraph");
const button = document.createElement("button");
button.id = "dialog-link";
button.className = "ui-button ui-corner-all ui-widget";
const span = document.createElement("span");
span.className = "ui-icon ui-icon-newwin";

button.appendChild(span);
button.append("Co to za formularz?");
paragraph.appendChild(button);