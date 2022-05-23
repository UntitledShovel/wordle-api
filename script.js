const body = document.getElementById('body');

function getJSON(file) {
    return fetch(file).then(response => response.json())
}

getJSON('dictionary.json')
    .then((data) => {
        let random = Math.round(Math.random() * data.length)
        body.innerHTML = data[random].toLowerCase()
    })