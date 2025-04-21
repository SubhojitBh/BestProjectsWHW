const url = "https://api.github.com/users/"
const card = document.querySelector('.card')

const image = document.querySelector('#image')
const naam = document.querySelector('#name')
const bio = document.querySelector('#bio')
const link = document.querySelector('#link')

document.querySelector('#button').addEventListener('click', (e) => {
    e.preventDefault()
    const inp = document.querySelector('#input')
    const username = inp.value.trim()
    const requrl = url + username;

    console.log(requrl)

    const xhr = new XMLHttpRequest();
    xhr.open("GET", requrl)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            const cardContent = card.querySelector('.error-message');  // Find and remove previous error message if any
            if (cardContent) {
                cardContent.remove();  // Remove the previous error message (if any)
            }

            if (xhr.status == 404) {
                console.log("User not found");

                // Create the error message
                const errorMessage = document.createElement('p');
                errorMessage.classList.add('error-message');
                errorMessage.textContent = "That UserName doesn't exist";
                card.appendChild(errorMessage);  // Append it to the card
                return;
            }
            const data = JSON.parse(this.responseText)
            // console.log(this.responseText);

            image.setAttribute('src', data.avatar_url)
            naam.innerHTML = `Name: ${data.name}`
            bio.innerHTML = `<b>Bio:</b> ${data.bio}`

            link.setAttribute('href', `https://github.com/${username}`)

            inp.value = ""
        }
    }

    xhr.send();
})