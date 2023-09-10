import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";
export default function ForecastDaily(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className= "align-center">{day()}</div>
      <div className="align-center">
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
      <div className="align-center">
        <span className="">{minTemperature()}</span>
        {"/ "}
        <span className="max-t">{maxTemperature()}</span>
      </div>
    </div>
  );
}
