import "./App.scss";
import React, { useState } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather.js";
import Forecast from "./components/forecast/forecast";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <div className="searchbox">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="current-container" >{currentWeather && <CurrentWeather data={currentWeather} />}</div>
      <div className="forecast-container">{forecast && <Forecast data={forecast} />}</div>
    </div>
  );
};

export default App;
