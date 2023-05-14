const API_KEY = "";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const apilink = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    fetch(apilink)
      .then((response) => response.json())
      .then((apidata) => {
        // console.log(data);
        const headercityName = document.querySelector("[header-cityName]");
        const headerdesc = document.querySelector("[header-weatherDesc]");
        const headerweathIcon = document.querySelector("[header-weatherIcon]");
        const headertemp = document.querySelector("[header-temp]");

        headercityName.innerText = `${apidata?.name}`;
        headerdesc.innerText = apidata?.weather?.[0]?.description;
        headerweathIcon.src = `http://openweathermap.org/img/w/${apidata?.weather?.[0]?.icon}.png`;
        headertemp.innerText = `${apidata?.main?.temp} °C`;
      })
      .catch((error) => console.log(error));
  });
}

const loccityName1 = document.querySelector("[place-cityName1]");
const locdesc1 = document.querySelector("[place-weatherDesc1]");
const locweatherIcon1 = document.querySelector("[place-weatherIcon1]");
const loctemp1 = document.querySelector("[place-temp1]");


async function fetchSearchWeatherInfoCity1(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherInfodata1 = await response.json();
    // console.log(weatherInfo1);
    loccityName1.innerText = weatherInfodata1?.name;
    locdesc1.innerText = weatherInfodata1?.weather?.[0]?.description;
    locweatherIcon1.src = `http://openweathermap.org/img/w/${weatherInfodata1?.weather?.[0]?.icon}.png`;
    loctemp1.innerText = `${weatherInfodata1?.main?.temp} °C`;
  } catch (error) {}
}

fetchSearchWeatherInfoCity1("Chandigarh")

const loccityName2 = document.querySelector("[place-cityName2]");
const locdesc2 = document.querySelector("[place-weatherDesc2]");
const locweatherIcon2 = document.querySelector("[place-weatherIcon2]");
const loctemp2 = document.querySelector("[place-temp2]");

async function fetchSearchWeatherInfoCity2(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherInfodata2 = await response.json();
    // console.log(weatherInfo2);
    loccityName2.innerText = weatherInfodata2?.name;
    locdesc2.innerText = weatherInfodata2?.weather?.[0]?.description;
    locweatherIcon2.src = `http://openweathermap.org/img/w/${weatherInfodata2?.weather?.[0]?.icon}.png`;
    loctemp2.innerText = `${weatherInfodata2?.main?.temp} °C`;
  } catch (error) {}
}

fetchSearchWeatherInfoCity2("Kolkata")

const loccityName3 = document.querySelector("[place-cityName3]");
const locdesc3 = document.querySelector("[place-weatherDesc3]");
const locweatherIcon3 = document.querySelector("[place-weatherIcon3]");
const loctemp3 = document.querySelector("[place-temp3]");

async function fetchSearchWeatherInfoCity3(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherInfodata3 = await response.json();
    // console.log(weatherInfo3);
    loccityName3.innerText = weatherInfodata3?.name;
    locdesc3.innerText = weatherInfodata3?.weather?.[0]?.description;
    locweatherIcon3.src = `http://openweathermap.org/img/w/${weatherInfodata3?.weather?.[0]?.icon}.png`;
    loctemp3.innerText = `${weatherInfodata3?.main?.temp} °C`;
  } catch (error) {}
}

fetchSearchWeatherInfoCity3("Bangalore")

const loccityName4 = document.querySelector("[place-cityName4]");
const locdesc4 = document.querySelector("[place-weatherDesc4]");
const locweatherIcon4 = document.querySelector("[place-weatherIcon4]");
const loctemp4 = document.querySelector("[place-temp4]");

async function fetchSearchWeatherInfoCity4(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherInfodata4 = await response.json();
    // console.log(weatherInfo4);
    loccityName4.innerText = weatherInfodata4?.name;
    locdesc4.innerText = weatherInfodata4?.weather?.[0]?.description;
    locweatherIcon4.src = `http://openweathermap.org/img/w/${weatherInfodata4?.weather?.[0]?.icon}.png`;
    loctemp4.innerText = `${weatherInfodata4?.main?.temp} °C`;
  } catch (error) {}
}

fetchSearchWeatherInfoCity4("Delhi")

const loccityName5 = document.querySelector("[place-cityName5]");
const locdesc5 = document.querySelector("[place-weatherDesc5]");
const locweatherIcon5 = document.querySelector("[place-weatherIcon5]");
const loctemp5 = document.querySelector("[place-temp5]");

async function fetchSearchWeatherInfoCity5(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherInfodata5 = await response.json();
    // console.log(weatherInfo5);
    loccityName5.innerText = weatherInfodata5?.name;
    locdesc5.innerText = weatherInfodata5?.weather?.[0]?.description;
    locweatherIcon5.src = `http://openweathermap.org/img/w/${weatherInfodata5?.weather?.[0]?.icon}.png`;
    loctemp5.innerText = `${weatherInfodata5?.main?.temp} °C`;
  } catch (error) {}
}

fetchSearchWeatherInfoCity5("London")

const loccityName6 = document.querySelector("[place-cityName6]");
const locdesc6 = document.querySelector("[place-weatherDesc6]");
const locweatherIcon6 = document.querySelector("[place-weatherIcon6]");
const loctemp6 = document.querySelector("[place-temp6]");

async function fetchSearchWeatherInfoCity6(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weatherInfodata6 = await response.json();
    // console.log(weatherInfo6);
    loccityName6.innerText = weatherInfodata6?.name;
    locdesc6.innerText = weatherInfodata6?.weather?.[0]?.description;
    locweatherIcon6.src = `http://openweathermap.org/img/w/${weatherInfodata6?.weather?.[0]?.icon}.png`;
    loctemp6.innerText = `${weatherInfodata6?.main?.temp} °C`;
  } catch (error) {}
}

fetchSearchWeatherInfoCity6("Dubai");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const apilink = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    fetch(apilink)
      .then((response) => response.json())
      .then((apidata) => {
        // console.log(apidata);
        const placecityName = document.querySelector("[loc-city]");
        const placecityName2 = document.querySelector("[place-city]");
        const placemapIcon = document.querySelector("[place-mapIcon]");
        const placedesc = document.querySelector("[place-desc]");
        const placeweathIcon = document.querySelector("[place-weatherIcon]");
        const placetemp = document.querySelector("[place-temp]");
        const placewindspeed = document.querySelector("[place-windspeed]");
        const placehumidity = document.querySelector("[place-humidity]");
        const placecloudiness = document.querySelector("[place-cloudiness]");
        const placepressure = document.querySelector("[place-pressure]");
        const placemaxTemp = document.querySelector("[place-max-temp]");
        const placeminTemp = document.querySelector("[place-min-temp]");

        placecityName.innerText = apidata?.name;
        placecityName2.innerText = apidata?.name;
        placemapIcon.src = `https://flagcdn.com/144x108/${apidata?.sys?.country.toLowerCase()}.png`;
        placedesc.innerText = apidata?.weather?.[0]?.description;
        placeweathIcon.src = `http://openweathermap.org/img/w/${apidata?.weather?.[0]?.icon}.png`;
        placetemp.innerText = `${apidata?.main?.temp} °C`;
        placepressure.innerText = `${apidata?.main?.pressure} pascal`;
        placemaxTemp.innerText = `${apidata?.main?.temp_max} °C`;
        placeminTemp.innerText = `${apidata?.main?.temp_min} °C`;
        placewindspeed.innerText = `${apidata?.wind?.speed} m/s`;
        placehumidity.innerText = `${apidata?.main?.humidity}%`;
        placecloudiness.innerText = `${apidata?.clouds?.all}%`;
      })
      .catch((error) => console.log(error));
  });
}

const form = document.querySelector("[place-searchForm]");

const input = document.querySelector("[place-searchInput]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let city = input.value;

  if (city === "") fetchSearchWeatherInfocity("Chandigarh");
  else fetchSearchWeatherInfocity(city);
});
fetchSearchWeatherInfocity("Chandigarh");

async function fetchSearchWeatherInfocity(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const apidata = await response.json();
    // console.log(apidata);

    const placecityName2 = document.querySelector("[loc-city2]");
    const placecityName22 = document.querySelector("[place-city22]");
    const placemapIcon2 = document.querySelector("[place-mapIcon2]");
    const placedesc2 = document.querySelector("[place-desc2]");
    const placeweathIcon2 = document.querySelector("[locweatherIcon]");
    const placetemp2 = document.querySelector("[loctemp]");
    const placewindspeed2 = document.querySelector("[place-windspeed2]");
    const placehumidity2 = document.querySelector("[place-humidity2]");
    const placecloudiness2 = document.querySelector("[place-cloudiness2]");
    const placepressure2 = document.querySelector("[place-pressure2]");
    const placemaxTemp2 = document.querySelector("[place-max-temp2]");
    const placeminTemp2 = document.querySelector("[place-min-temp2]");

    placecityName2.innerText = apidata?.name;
    placecityName22.innerText = apidata?.name;
    placemapIcon2.src = `https://flagcdn.com/144x108/${apidata?.sys?.country.toLowerCase()}.png`;
    placedesc2.innerText = apidata?.weather?.[0]?.description;
    placeweathIcon2.src = `http://openweathermap.org/img/w/${apidata?.weather?.[0]?.icon}.png`;
    placetemp2.innerText = `${apidata?.main?.temp} °C`;
    placepressure2.innerText = `${apidata?.main?.pressure} pascal`;
    placemaxTemp2.innerText = `${apidata?.main?.temp_max} °C`;
    placeminTemp2.innerText = `${apidata?.main?.temp_min} °C`;
    placewindspeed2.innerText = `${apidata?.wind?.speed} m/s`;
    placehumidity2.innerText = `${apidata?.main?.humidity}%`;
    placecloudiness2.innerText = `${apidata?.clouds?.all}%`;
  } catch (error) {}
}

