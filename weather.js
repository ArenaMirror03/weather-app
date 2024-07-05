document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('search-btn');
    const weatherResult = document.getElementById('weather-result');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('weather-description');
    const weatherIcon = document.getElementById('weather-icon');

    const API_KEY = 'YOUR_API_KEY'; // Replace with your actual OpenWeatherMap API key

    async function fetchWeather(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
            if (!response.ok) {
                throw new Error('Main Kyu Batau Google Kr le');
            }
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            alert(error.message);
        }
    }

    function displayWeather(data) {
        cityName.textContent = data.name;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherResult.classList.remove('hidden');
    }

    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        }
    });

    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const city = cityInput.value.trim();
            if (city) {
                fetchWeather(city);
            }
        }
    });
});
