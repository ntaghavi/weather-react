import React from "react";
export default function CityData({ city, data }) {
  return (
    <div className="col-6 p-3">
      <h1 className="card-title day" id="city-name">
        {city}
      </h1>
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
      <p className="card-subtitle w-stat">
        <span id="city-current-description"> {data.description} </span>
      </p>
    </div>
  );
}
