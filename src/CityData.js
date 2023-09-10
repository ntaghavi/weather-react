import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
export default function CityData({ city, data }) {
  function handleEmoji(iconCode) {
    const codeMapping = {
      "01d": "CLEAR_DAY",
      "01n": "CLEAR_NIGHT",
      "02d": "PARTLY_CLOUDY_DAY",
      "02n": "PARTLY_CLOUDY_NIGHT",
      "03d": "PARTLY_CLOUDY_DAY",
      "03n": "PARTLY_CLOUDY_NIGHT",
      "04d": "CLOUDY",
      "04n": "CLOUDY",
      "09d": "RAIN",
      "09n": "RAIN",
      "10d": "RAIN",
      "10n": "RAIN",
      "11d": "RAIN",
      "11n": "RAIN",
      "13d": "SNOW",
      "13n": "SNOW",
      "50d": "FOG",
      "50n": "FOG",
    };

    return (
      <div className="canvas emoji">
        <ReactAnimatedWeather
          icon={codeMapping[iconCode]}
          color="#1e1e1e"
          size={64}
          animate={true}
        />
      </div>
    );
  }
  return (
    <div className="col-6 p-3">
      <h1 className="card-title day" id="city-name">
        {city}
      </h1>

      <p className="card-subtitle w-stat">
        <span id="city-current-description" className="">
          {" "}
          {data.day} {data.clock}
        </span>
      </p>
      <p className="card-subtitle w-stat">
        <span id="city-current-description" className="mb-5">
          {" "}
          {data.description}{" "}
        </span>
      </p>
      <div className="float-left">{handleEmoji(data.icon)}</div>
    </div>
  );
}
