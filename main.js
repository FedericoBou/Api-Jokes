// Js Weather

// Seleccion de elementos
const iconElement = document.querySelector('.weather-icon')
const tempElement = document.querySelector('.temperature-value p')
const descElement = document.querySelector('.temperature-description')
const locationElement = document.querySelector('.location p')
const notificationElement = document.querySelector('.notification')

// Datos
const weather = {};
weather.temperature = {
    unit: 'celsius'
};

//Variables
const KELVIN = 273;

//Api Key
const key = '96f6ba150dbfde1782395bffef95d6a2';

//Localizador en el buscador
if ('geolocation' in navigator) 
{
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else 
{
    notificationElement.getElementsByClassName.display = 'block';
    notificationElement.innerHTML = "<p> Browser does't support your location </p>"
}

// User Position
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

//Show Error
function showError(error) { 
    notificationElement.getElementsByClassName.display = 'block';
    notificationElement.innerHTML = `<p> ${error.message}`;
}

//API weather
function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
    .then(function(response) {
        let data = response.json();
        return data;
    })
    .then (function(data){
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })

    .then(function() {
        displayWeather()
    });
}

//Display the Weather
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}º <span> C </span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`
}


// Js JOKES
const button = document.querySelector('button');
const jokeText = document.querySelector('.container p');

button.addEventListener('click', getJoke);

async function getJoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json()
    jokeText.innerHTML = jokeObj.joke;
}

            // RANKING

const ratig = document.querySelectorAll('.rating');
const rCointainer = document.querySelector('.ratings-container');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

panel.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        selectedRating = e.target.nextElementSibling.innerHTML;
        console.log(selectedRating);
    }
    
})