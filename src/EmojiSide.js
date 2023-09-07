import React from "react";
import "./App.css";
export default function EmojiSide({ data }) {
  return (
    <div className="col-6 temp">
      {data.icon}
      <span className="temperature card-title">
        <span id="city-current-temp">{data.temperature}</span>&deg;
      </span>
      <span>
        <span id="celcius">C&deg;</span> |<span id="farenheit">F&deg;</span>
      </span>
    </div>
  );
}
