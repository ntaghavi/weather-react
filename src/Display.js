import React, { useState } from "react";
import axios from "axios";
import Current from "./Current";
import Forecast from "./Forecast";
import "./Display.css";
import ReactAnimatedWeather from "react-animated-weather";

function Display({ city = "Tehran", show = false }) {
  let [temperature, setTemperature] = useState(null);
  let [desc, setDesc] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [emoji, setEmoji] = useState(null);
  let [wday, setWday] = useState(null);
  let [clock, setClock] = useState(null);
  let data_dict = {
    temperature: temperature,
    description: desc,
    humidity: humidity,
    windSpeed: wind,
    icon: emoji,
    weekDay: wday,
    clock: clock,
  };
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
  function formatClk(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function handleRequest(response) {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    setTemperature(Math.round(response.data.main.temp));
    setDesc(response.data.weather[0].description);
    setHumidity(`${Math.round(response.data.main.humidity)} %`);
    setWind(`${Math.round(response.data.wind.speed)} km/h`);
    var date = new Date(response.data.dt * 1000);
    setWday(days[date.getDay()]);
    let clock = ` ${formatClk(date.getHours())}:${formatClk(
      date.getMinutes()
    )}`;
    setClock(clock);
    let iconCode = response.data.weather[0].icon;
    //let iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    setEmoji(handleEmoji(iconCode));
  }
  if (show) {
    let urlKey = "8cd9be374c7c96c39a9fe73f4bf2f055";
    let urlApiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${urlKey}&&units=metric`;
    axios.get(urlApiWeather).then(handleRequest);

    return (
      <div>
        <Current city={city} data={data_dict} />
        <Forecast city={city} />
      </div>
    );
  } else {
    let urlKey = "8cd9be374c7c96c39a9fe73f4bf2f055";
    let urlApiWeather = `https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=${urlKey}&&units=metric`;

    axios.get(urlApiWeather).then(handleRequest);

    return (
      <div>
        <Current city="Tehran" data={data_dict} />
        <Forecast city="Tehran" />
      </div>
    );
  }
}

export default Display;
