// WeatherPage.js
import React, { useState, useEffect } from 'react';

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('London'); // default city
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
`
        );
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeather();
  }, [city, API_KEY]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city"
      />
      <button onClick={() => setCity(city)}>Get Weather</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  );
};

export default WeatherPage;
