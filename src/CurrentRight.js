import React, { useState } from "react";
import "./App.css";
export default function CurrentRight({ data }) {
  let [unit, setUnit] = useState("°C");
  let [spareUnit, setSpareUnit] = useState("°F");
  let [clicked, setClicked] = useState(false);
  let [displayedTemp, setDisplayedTemp] = useState(data.temperature);

  return (
    <div className="col-6 float-right">
      <div className="temperature card-title d-block">
        <span id="city-current-temp">
          {clicked ? displayedTemp : data.temperature}
        </span>
        <span
          id="unit"
          onClick={() => {
            setUnit("°C");
            setSpareUnit("°F");
            setDisplayedTemp(data.temperature);
            setClicked(true);
          }}
        >
          {unit}
        </span>
        <span
          id="spare-unit"
          onClick={() => {
            setUnit("°F");
            setSpareUnit("°C");
            setDisplayedTemp(Math.round(data.temperature * 1.8 + 32));
            setClicked(true);
          }}
        >
          {spareUnit}
        </span>
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
