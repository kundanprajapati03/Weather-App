let cityName = document.getElementById('cityName');
let searchBtn = document.getElementById('searchBtn');
let weatherImage = document.getElementById('weather-image');


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = "8171b7ba5c13dfc7d8630102d0fa51e9";

async function checkWeather(cityName) {
    const response = await fetch(apiUrl + `&q=${cityName}` + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block";
    }
    else{
        document.querySelector('.weather-container').style.display = "block";
    }

    console.log(data);
    console.log(data.weather[0].main);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>°C</sup>";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

    const imgData = data.weather[0].main;

    switch (imgData) {
        case "Clouds":
            weatherImage.src = "assest/images/clouds.png"
            break;
        case "Clear":
            weatherImage.src = "assest/images/clear.png"
            break;
        case "Drizzle":
            weatherImage.src = "assest/images/drizzle.png"
            break;
        case "Mist":
            weatherImage.src = "assest/images/mist.png"
            break;
        case "Rain":
            weatherImage.src = "assest/images/rain.png"
            break;
        case "Snow":
            weatherImage.src = "assest/images/snow.png"
            break;

        default:
            console.log("wrong image");
            break;
    }

}
searchBtn.addEventListener('click', () => {
    checkWeather(cityName.value);
})

cityName.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(cityName.value);
    }
});
