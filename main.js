document.querySelector(`button`).addEventListener(`click`, getData);

let name    = document.querySelector('.name');
let cvr     = document.querySelector('.cvr')
let email   = document.querySelector('.email');
let address = document.querySelector('.address');
let city    = document.querySelector('.city');

function getData() {
    const userInput = document.querySelector('#srch').value;
    const url = `https://cvrapi.dk/api?search=${userInput}&country=dk`;

    if(!userInput.trim()) return alert('Please enter a company name or CVR number in the search field');

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (!data.name) {
            reset();
            return name.innerText = data.error || 'Shipper not found';
        }

        name.innerText = data.name;
        cvr.innerText = `DK${data.vat}`
        email.innerText = data.email || "<Email not on record>";
        address.innerText = data.address;
        city.innerText = `${data.city}, ${data.zipcode}`    
    })
    .catch(err => {
        console.log(err)
    })    
}

function keyDown(keyStroke) {
    keyStroke = window.event.keyCode
    if (keyStroke === 13) {
        getData();
    }
}

function reset() {
    cvr.innerText = ``;
    email.innerText = ``;
    address.innerText = ``;
    city.innerText = ``;
}

function onClick(click) {
    // add event listener to copy whatever is clicked
}