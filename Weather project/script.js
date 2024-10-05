const apiKey = '1a9cc2ef6bc281acc989e1b0ed58d748';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

async function fetchWeather(city) {
  const url = `${baseUrl}${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayWeather(data);
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
}

function displayWeather(data) {
  document.getElementById('city-name').textContent = data.name;
  document.getElementById('temperature').textContent = data.main.temp;
  document.getElementById('humidity').textContent = data.main.humidity;
  document.getElementById('wind-speed').textContent = data.wind.speed;
}

document.getElementById('search-btn').addEventListener('click', () => {
  const cityInput = document.getElementById('city-input').value;
  fetchWeather(cityInput);
});
