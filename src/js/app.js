const weatherBlock = document.querySelector('#weather');

const API_KAY = '5d066958a60d315387d9492393935c19';
const CITY_NAME = 'DNIPRO';
const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&APPID=${API_KAY}`;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Помилка під час завантаження даних.');
    }
    const data = await response.json();
    console.log(data);
    getWeatherData(data);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const getWeatherData = (data) => {
  const location = data.name;
  const temp = Math.round(data.main.temp);
  const { pressure } = data.main;
  const description = data.weather[0].main;
  const { humidity } = data.main;
  const { speed } = data.wind;
  const { deg } = data.wind;
  const { icon } = data.weather[0];

  const widget = `
    <div class="weather-widget">
      <div class="weather-city">${location}</div>
      <div class="weather-temp">Температура: ${temp}°C</div>
       <div class="weather-description">${description}</div>
      <div class="weather-pressure">Тиск: ${pressure}</div>
      <div class="weather-humidity">Вологість: ${humidity}%</div>
      <div class="weather-speed">Швидкість вітру: ${speed} м/с</div>
      <div class="weather-wind">Напрямок вітру: ${deg}°</div>
      <div class="weather-icon">
        <img src="http://openweathermap.org/img/w/${icon}.png" alt="${description}">
      </div>
    </div>
  `;

  weatherBlock.innerHTML = widget;
};

fetchData(urlWeather);
