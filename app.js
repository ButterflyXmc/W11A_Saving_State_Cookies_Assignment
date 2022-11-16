// Cookies.set(`username`, `bestUser`);

function whenClicked(event){
    Cookies.set(`selection`, `colorPink`);
}

function clicked(event){
    Cookies.set(`selection`, `colorBlue`);
}


function cLicked(event){
    Cookies.set(`selection`, `colorPurple`);
}

// location.href = `selection.html`

document.getElementById(`purple`).addEventListener(`click`, cLicked);
document.getElementById(`pink`).addEventListener(`click`, whenClicked);
document.getElementById(`blue`).addEventListener(`click`, clicked);