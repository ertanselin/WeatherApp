import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.scss";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="forecast-page">
      <div className="title">UPCOMING DAYS</div>
      <div>
        <label className="forecast"></label>
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 6).map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      alt="weather"
                      className="icon-small"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="day">{forecastDays[index]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}&deg;C /{" "}
                      {Math.round(item.main.temp_max)}&deg;C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Feels Like</label>
                    <label>{Math.round(item.main.feels_like)} &deg;C</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Cloudiness</label>
                    <label>{item.clouds.all} %</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Wind Speed</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity} %</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Sea Level</label>
                    <label>{item.main.sea_level} hPa</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Forecast;
