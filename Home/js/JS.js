
const apiKey = "62db5c257b70c26803c5a702fb27bd0f";

const cityElement = document.querySelector("#city")
const temMin = document.querySelector("#temperatureMin")
const tempMax = document.querySelector("#temperatureMax")
const descElement = document.querySelector("#description")
const weatherIconElemnt = document.querySelector("#weather-icon")


// Funções
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()
    
    return data
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerHTML = data.name;
    tempMax.innerHTML = parseInt(data.main.temp_max) + 1 + "°C" + " Max";
    temMin.innerHTML = parseInt(data.main.temp_min) + "°C" + " min"
    descElement.innerHTML = data.weather[0].description;
    weatherIconElemnt.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);  
}

document.addEventListener("DOMContentLoaded", (e) => {

    e.preventDefault();

    const city = "Macaiba"

    showWeatherData(city);

})