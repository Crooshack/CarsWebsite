if (window.localStorage) {
    const powitanie = document.getElementById("powitanie");
    const time = new Date();

    if(localStorage.getItem("kolejne_wejscie") === "1")
    {
        powitanie.innerHTML = "Witam ponownie na mojej stronie!" + " " + "Twoja poprzednia wizyta: " + localStorage.getItem("wizyta");
    }
    else
    {
        powitanie.innerHTML = "Witam na mojej stronie!" + " " + "Twoja poprzednia wizyta: jesteś tu pierwszy raz";
        localStorage.setItem("kolejne_wejscie", "1");
    }
    localStorage.setItem("wizyta", (time.getDate() + '.' + (time.getMonth()+1) + '.' + time.getFullYear() + ' ' + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()));
}