let randomUserForm = document.querySelector('#random-user-form');
let randomUserOutput = document.querySelector('#random-user-output');

randomUserForm.after(randomUserOutput);

randomUserForm.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        let results = data.results;
        console.log(results)
        results.map(result => {
            console.log(result)
            for(let res in result)
            console.log(res)

            let imageUrl = result.picture.medium
            let imageElement = document.createElement('img');
            imageElement.src = imageUrl

            let name = `Hi, my name is ${result.name.first} ${result.name.last}`
            let nameElement = document.createElement('p');
            nameElement.append(name)

            let email = `My email address is ${result.email}`
            let emailElement = document.createElement('p');
            emailElement.append(email);

            let phone = `My phone number is ${result.phone}`
            let phoneElement = document.createElement('p');
            phoneElement.append(phone);

            let address = `${result.location.street.number} ${result.location.street.name} street, ${result.location.city} city, ${result.location.state} state, ${result.location.country}`
            let addressElement = document.createElement('p');
            addressElement.append(address);

            let username = `Username: ${result.login.username}`
            let usernameElement = document.createElement('p');
            usernameElement.append(username);

            let password = `Password: ${result.login.password}`
            let passwordElement = document.createElement('p');
            passwordElement.append(password);

            randomUserOutput.append(imageElement, nameElement, emailElement, phoneElement, addressElement, usernameElement, passwordElement)
        })
    })
})

