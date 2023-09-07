import React, { useState } from "react";
import axios from "axios";
import Current from "./Current";
import Forecast from "./Forecast";
import "./Display.css";
function Display({ city = "Tehran", show = false }) {
  let [temperature, setTemperature] = useState(null);
  let [desc, setDesc] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [emoji, setEmoji] = useState(null);

  let data_dict = {
    temperature: temperature,
    description: desc,
    humidity: humidity,
    windSpeed: wind,
    icon: emoji,
  };
  function handleRequest(response) {
    setTemperature(`${Math.round(response.data.main.temp)}°C`);
    setDesc(response.data.weather[0].description);
    setHumidity(`${Math.round(response.data.main.humidity)} %`);
    setWind(`${Math.round(response.data.wind.speed)} km/h`);
    let iconurl =
      "http://openweathermap.org/img/w/" +
      response.data.weather[0].icon +
      ".png";
    setEmoji(<img className="emoji" src={iconurl} alt="weather emoji" />);
  }
  if (show) {
    let urlKey = "8cd9be374c7c96c39a9fe73f4bf2f055";
    let urlApiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${urlKey}&&units=metric`;
    axios.get(urlApiWeather).then(handleRequest);

    return (
      <div>
        <Current city={city} data={data_dict} />
        <Forecast />
      </div>
    );
  } else {
    let urlKey = "8cd9be374c7c96c39a9fe73f4bf2f055";
    let urlApiWeather = `https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=${urlKey}&&units=metric`;
    axios.get(urlApiWeather).then(handleRequest);

    return (
      <div>
        <Current city="Tehran" data={data_dict} />
        <Forecast />
      </div>
    );
  }
}

export default Display;
