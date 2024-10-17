import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Access the API key from the environment variable
  const Api_key = process.env.REACT_APP_WEATHER_API_KEY;
  const city = 'Dhampur';

  const fetchData = async () => {
    setLoading(true);
    setError(null);  
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${Api_key}&q=${city}`
      );

      if (!response.ok) {
        throw new Error('Something went wrong with the request');
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Weather App made by Saurabh</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {data ? (
        <div>
          <h2>Weather in {data.location.name}</h2>
          <p>Temperature: {data.current.temp_c}°C</p>
          <p>Condition: {data.current.condition.text}</p>
          <p>Humidity: {data.current.humidity}%</p>
        </div>
      ) : (
        !loading && <p>Something went wrong, please try again.</p>
      )}
    </div>
  );
};

export default App;
