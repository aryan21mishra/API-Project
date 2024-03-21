const jokes = document.querySelector('.jokes')
const dilivery = document.querySelector('.dilivery')
const btnMore = document.querySelector('.btn-more')
const contentContainer = document.querySelector('.content-container')
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit'

function getjokes() {
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            contentContainer.style.display = 'block'
            jokes.classList.add('fade')
            if (data.setup) {
                jokes.innerHTML = `${data.setup}`
                if (data.delivery) {
                    dilivery.classList.remove('display-none')
                    dilivery.innerHTML = 'Delivery: ' + `${data.delivery}`
                    console.log(data.delivery);
                }
                else {
                    dilivery.classList.add('display-none')
                    console.log('nahi laguga');
                }
            }
            else {
                jokes.innerHTML = `${data.joke}`
                if (data.delivery) {
                    dilivery.classList.remove('display-none')
                    dilivery.innerHTML = 'Delivery: ' + `${data.delivery}`
                    console.log(data.delivery);
                }
                else {
                    dilivery.classList.add('display-none')
                    console.log('nahi laguga');
                }
            }
        })
}

btnMore.addEventListener('click', getjokes)