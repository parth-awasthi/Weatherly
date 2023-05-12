const API_KEY = "cd3bbd3f1df50d287ca9503fe9da72c6"; //ENTER YOUR API KEY

const cityName1 = document.querySelector("[data-cityName1]");
const desc1 = document.querySelector("[data-weatherDesc1]");
const weatherIcon1 = document.querySelector("[data-weatherIcon1]");
const temp1 = document.querySelector("[data-temp1]");

async function fetchSearchWeatherInfo1(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherInfo = await response.json();
    console.log(weatherInfo);
    cityName1.innerText = weatherInfo?.name;
    desc1.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon1.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp1.innerText = `${weatherInfo?.main?.temp} °C`;
  } catch (error) {}
}

fetchSearchWeatherInfo1("Chandigarh")

const cityName2 = document.querySelector("[data-cityName2]");
const desc2 = document.querySelector("[data-weatherDesc2]");
const weatherIcon2 = document.querySelector("[data-weatherIcon2]");
const temp2 = document.querySelector("[data-temp2]");

async function fetchSearchWeatherInfo2(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherInfo = await response.json();
    console.log(weatherInfo);
    cityName2.innerText = weatherInfo?.name;
    desc2.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon2.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp2.innerText = `${weatherInfo?.main?.temp} °C`;
  } catch (error) {}
}

fetchSearchWeatherInfo2("Kolkata")

const cityName3 = document.querySelector("[data-cityName3]");
const desc3 = document.querySelector("[data-weatherDesc3]");
const weatherIcon3 = document.querySelector("[data-weatherIcon3]");
const temp3 = document.querySelector("[data-temp3]");

async function fetchSearchWeatherInfo3(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherInfo = await response.json();
    console.log(weatherInfo);
    cityName3.innerText = weatherInfo?.name;
    desc3.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon3.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp3.innerText = `${weatherInfo?.main?.temp} °C`;
  } catch (error) {}
}

fetchSearchWeatherInfo3("Bangalore")

const cityName4 = document.querySelector("[data-cityName4]");
const desc4 = document.querySelector("[data-weatherDesc4]");
const weatherIcon4 = document.querySelector("[data-weatherIcon4]");
const temp4 = document.querySelector("[data-temp4]");

async function fetchSearchWeatherInfo4(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherInfo = await response.json();
    console.log(weatherInfo);
    cityName4.innerText = weatherInfo?.name;
    desc4.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon4.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp4.innerText = `${weatherInfo?.main?.temp} °C`;
  } catch (error) {}
}

fetchSearchWeatherInfo4("Delhi")

const cityName5 = document.querySelector("[data-cityName5]");
const desc5 = document.querySelector("[data-weatherDesc5]");
const weatherIcon5 = document.querySelector("[data-weatherIcon5]");
const temp5 = document.querySelector("[data-temp5]");

async function fetchSearchWeatherInfo5(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherInfo = await response.json();
    console.log(weatherInfo);
    cityName5.innerText = weatherInfo?.name;
    desc5.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon5.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp5.innerText = `${weatherInfo?.main?.temp} °C`;
  } catch (error) {}
}

fetchSearchWeatherInfo5("London")

const cityName6 = document.querySelector("[data-cityName6]");
const desc6 = document.querySelector("[data-weatherDesc6]");
const weatherIcon6 = document.querySelector("[data-weatherIcon6]");
const temp6 = document.querySelector("[data-temp6]");

async function fetchSearchWeatherInfo6(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherInfo = await response.json();
    console.log(weatherInfo);
    cityName6.innerText = weatherInfo?.name;
    desc6.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon6.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp6.innerText = `${weatherInfo?.main?.temp} °C`;
  } catch (error) {}
}

fetchSearchWeatherInfo6("Dubai");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const cityName = document.querySelector("[current-city]");
        const cityName2 = document.querySelector("[curr-city]");
        const mapIcon = document.querySelector("[current-mapIcon]");
        const desc = document.querySelector("[current-desc]");
        const weathIcon = document.querySelector("[current-weatherIcon]");
        const temp = document.querySelector("[current-temp]");
        const windspeed = document.querySelector("[data-windspeed]");
        const humidity = document.querySelector("[data-humidity]");
        const cloudiness = document.querySelector("[data-cloudiness]");
        const pressure = document.querySelector("[data-pressure]");
        const maxTemp = document.querySelector("[data-max-temp]");
        const minTemp = document.querySelector("[data-min-temp]");

        cityName.innerText = data?.name;
        cityName2.innerText = data?.name;
        mapIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
        desc.innerText = data?.weather?.[0]?.description;
        weathIcon.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
        temp.innerText = `${data?.main?.temp} °C`;
        pressure.innerText = `${data?.main?.pressure} pascal`;
        maxTemp.innerText = `${data?.main?.temp_max} °C`;
        minTemp.innerText = `${data?.main?.temp_min} °C`;
        windspeed.innerText = `${data?.wind?.speed} m/s`;
        humidity.innerText = `${data?.main?.humidity}%`;
        cloudiness.innerText = `${data?.clouds?.all}%`;
      })
      .catch((error) => console.log(error));
  });
} else {
  const weatherData = document.querySelector("#weather-data");
  weatherData.innerHTML =
    "<p>Geolocation is not supported by this browser.</p>";
}

const searchForm = document.querySelector("[data-searchForm]");

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = searchInput.value;

  if (cityName === "") fetchSearchWeatherInfocity("Chandigarh");
  else fetchSearchWeatherInfocity(cityName);
});
fetchSearchWeatherInfocity("Chandigarh");

async function fetchSearchWeatherInfocity(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    console.log(data);

    const cityName2 = document.querySelector("[current-city2]");
    const cityName22 = document.querySelector("[curr-city22]");
    const mapIcon2 = document.querySelector("[current-mapIcon2]");
    const desc2 = document.querySelector("[current-desc2]");
    const weathIcon2 = document.querySelector("[current-weatherIcon2]");
    const temp2 = document.querySelector("[current-temp2]");
    const windspeed2 = document.querySelector("[data-windspeed2]");
    const humidity2 = document.querySelector("[data-humidity2]");
    const cloudiness2 = document.querySelector("[data-cloudiness2]");
    const pressure2 = document.querySelector("[data-pressure2]");
    const maxTemp2 = document.querySelector("[data-max-temp2]");
    const minTemp2 = document.querySelector("[data-min-temp2]");

    cityName2.innerText = data?.name;
    cityName22.innerText = data?.name;
    mapIcon2.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    desc2.innerText = data?.weather?.[0]?.description;
    weathIcon2.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    temp2.innerText = `${data?.main?.temp} °C`;
    pressure2.innerText = `${data?.main?.pressure} pascal`;
    maxTemp2.innerText = `${data?.main?.temp_max} °C`;
    minTemp2.innerText = `${data?.main?.temp_min} °C`;
    windspeed2.innerText = `${data?.wind?.speed} m/s`;
    humidity2.innerText = `${data?.main?.humidity}%`;
    cloudiness2.innerText = `${data?.clouds?.all}%`;
  } catch (error) {}
}