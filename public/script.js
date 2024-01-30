function addName() {
    const container = document.getElementsByClassName('formContainer')[0];
    const form = document.getElementsByClassName('form')[0];
    form.addEventListener('submit', getFormValue);
    
    function getFormValue(event) {
        event.preventDefault();

        // const container = document.getElementsByClassName('container')[0];
        const user_name = form.querySelector('[name="text"]');
        const newUser = document.createElement('div');
        newUser.innerText = `${user_name.value}, now you can go to the Predictions Page`;
        newUser.classList.add('invitation');
        container.appendChild(newUser);

        event.target.reset();
    }
}

// addName();