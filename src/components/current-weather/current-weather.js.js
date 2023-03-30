import React from "react";
import moment from "moment/moment";
import "./current-weather.scss";

import { TiLocation } from "react-icons/ti";

const CurrentWeather = ({ data }) => {
  const dateTime = moment();
  const dayStr = dateTime.format("dddd");
  const dateStr = dateTime.format("LL");

  return (
    <div className="fullpage">
      <div
        className="image"
        style={{
          backgroundImage: `url(${require(`../../assets/img/${data.weather[0].icon}.gif`)})`,
        }}
      ></div>
      <section className="current-weather">
        <div className="top">
          <div className="left">
            <h3>
              <TiLocation /> {data.city}
            </h3>
            <h5>{dayStr}</h5>
            <h5>{dateStr}</h5>
          </div>
          <div className="right">
            <img
              alt="weather"
              className="weather-icon"
              src={`icons/${data.weather[0].icon}.png`}
            />
            <div className="info">
              <h2>{Math.round(data.main.temp)}&deg;C</h2>
              <h4>{data.weather[0].description}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}&deg;C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentWeather;
