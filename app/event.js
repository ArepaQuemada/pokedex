let counter = 1;
let buttonDelete = document.querySelector("#delete");
let counterElement = document.querySelector('#counter');

this.addEventListener('add-pokemon', (e) => {
    counterElement.innerHTML = counter;
    counter++;
    if(counter === e.detail) {
        hideCounter();
        enableButton();
    }
});

function hideCounter() {
    setTimeout(()=> {
        counterElement.style.display = 'none';
    }, 2000);
}

function showCounter() {
    document.querySelector('#counter').style.display = 'block';
}

function handleDelete(e) {
    const nodes = document.querySelectorAll('.div-pokemon');
    for(element of nodes) {
        element.parentNode.removeChild(element);
    }
    counter = 0;
    counterElement.innerHTML = counter;
    disableButton();
}

function enableButton() {
    buttonDelete.disabled = false;
}

function disableButton() {
    buttonDelete.disabled = true;
}