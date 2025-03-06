const API_KEY = "4b071caf1fab98b17bf72d7651d39293"; 

function getWeather() {
    const city = document.getElementById("city").value.trim();
    
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Weather Data:", data); 
            displayWeather(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("Failed to fetch weather data. Please check the city name and API key.");
        });
}

function displayWeather(data) {
    const weatherResult = document.getElementById("weather-result");
    weatherResult.style.display = "block";

    weatherResult.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
}
