//62db5c257b70c26803c5a702fb27bd0f

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//https://api.openweathermap.org/data/2.5/weather?q=maceio&units=metric&appid=62db5c257b70c26803c5a702fb27bd0f&lang=pt_br

//Variáveis e seleção de elementos

const apiKey = "62db5c257b70c26803c5a702fb27bd0f";
const apiCountryURL = "https://flagsapi.com/BR/flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector(".search");

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElemnt = document.querySelector("#weather-icon")
const coutryElement = document.querySelector("#coutry")
const humidityElemnt = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")
const weatherContainer = document.querySelector("#weather-data")


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
    tempElement.innerHTML = parseInt(data.main.temp);
    descElement.innerHTML = data.weather[0].description;
    weatherIconElemnt.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    humidityElemnt.innerHTML = data.main.humidity;
    windElement.innerHTML = data.wind.speed;    
    coutryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);

   weatherContainer.classList.remove("hide")
}

// Eventos

searchBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);

})

cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter"){
        const city = e.target.value;
        showWeatherData(city);
    }
})