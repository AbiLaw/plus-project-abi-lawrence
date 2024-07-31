
function searching(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let searchCity = document.querySelector("#city");

  
  let h1 = document.querySelector("#city");
  h1.innerHTML = ' ${searchInput.value} ';

  searchCity.innerHTML = `${searchInput.value}`;

  let apiKey = `3ae4fbd5aec02f8bf63o3f22ta2b0b5c`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp)
}



let form = document.querySelector("#weather-form");
form.addEventListener("submit", searching);

let currentDate = new Date();
let dated = document.querySelector("#today");
dated.innerHTML = formatDate(currentDate);

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  date.getDate();
  date.getMonth();
  date.getHours();

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `Today ${day} ${hours}:${minutes}`;
};

// Add date and month to displayed date 

let farenheit = document.querySelector("#farenheit");
farenheit.addEventListener("click", convertToFarenheit);

function convertToFarenheit(event) {
  event.preventDefault();

  let temperatureElement = document.querySelector(`#temp`);
  let temp = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temp * 9) / 5 + 32);
}

let celsius = document.querySelector(`#celsius`);
celsius.addEventListener("click", convertToCelsius);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(`#temp`);
  temperatureElement.innerHTML = temp;
}

function displayTemp (response) {
  let temperatureElement= document.querySelector (`#temp`)
  let temp = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let cityElement = document.querySelector(`#city`);

  temperatureElement.innerHTML = temp;
  cityElement.innerHTML = city;
}





