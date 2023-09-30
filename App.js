import React, { useState, useEffect } from "react";

const API_KEY = "1266ad07b66517497b1acf79ea5a6a64";
const API_URL =
  "https://api.shecodes.io/weather/v1/current?lon=13.404954&lat=52.520007&key=1266ad07b66517497b1acf79ea5a6a64}";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Berlin"); // Default city

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(
          `${API_URL}?q=$Berlin&appid=$1266ad07b66517497b1acf79ea5a6a64&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchWeatherData();
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="berlin"
        value={city}
        onChange={(e) => setCity('')}
      />
      {weatherData && (
        <div>
          <h2>Weather in celsius to fahrenheit</h2>
          <p>Temperature: 12°C</p>
          <p>Description: 20%</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
