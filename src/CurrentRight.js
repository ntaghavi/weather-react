import React from "react";
import "./App.css";
export default function CurrentRight({ data }) {
  return (
    <div className="col-6 float-right">
      <div className="temperature card-title d-block">
        <span id="city-current-temp">{data.temperature}</span>
      </div>
      <div className="card-subtitle w-data">
        <p className="card-subtitle">
          <span id="city-current-wday"></span>
          <span className="clk" id="city-current-clock"></span>
        </p>
        <p className="card-subtitle w-stat" id="weather-d"></p>
        <p className="card-subtitle w-stat">
          Humidity: <span id="city-current-humidity">{data.humidity}</span>
        </p>
        <p className="card-subtitle w-stat">
          Wind Speed:
          <span id="city-current-wind"> {data.windSpeed} </span>
        </p>
      </div>
    </div>
  );
}
