import React, { useState } from "react";
import "./Search.css";
import Current from "./Current";
import Forecast from "./Forecast";
import axios from "axios";
function Search() {
  let [city, setCity] = useState("Tehran");
  let [sval, setSval] = useState(city);
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function formatClk(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    var date = new Date(response.data.dt * 1000);
    let clock = ` ${formatClk(date.getHours())}:${formatClk(
      date.getMinutes()
    )}`;

    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      date: date,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      day: days[date.getDay()],
      clock: clock,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSval(city);
    requestData();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function requestData() {
    let urlKey = "8ca7dd4e61360b90fb66918853670e48";
    let urlApiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${urlKey}&&units=metric`;

    axios.get(urlApiWeather).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="search-eng">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-inp"
            onChange={updateCity}
            placeholder="Type city name"
          />
          <input type="submit" className="sub-btn" />
        </form>
        <Current city={sval} data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    requestData();
    return <p>Loading ... </p>;
  }
}
export default Search;
