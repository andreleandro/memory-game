const input = document.querySelector('.login-input'); 
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => { // target is object destructuring
    if (target.value.length > 2) {
        button.removeAttribute('disabled') //removing the attribute to enable button
        return
    }

    button.setAttribute('disabled', ''); //putting the attribute to disabled button
}

const handleSubmit = (event) => {
    event.preventDefault(); //prevent the default comportament of refreshing the page

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)