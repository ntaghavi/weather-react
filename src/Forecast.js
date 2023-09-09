import React from "react";
import axios from "axios";
//import ReactAnimatedWeather from "react-animated-weather";
function Forecast({ city, show = false }) {
  let urlKey = "8cd9be374c7c96c39a9fe73f4bf2f055";
  // function handleEmoji(iconCode) {
  //   const codeMapping = {
  //     "01d": "CLEAR_DAY",
  //     "01n": "CLEAR_NIGHT",
  //     "02d": "PARTLY_CLOUDY_DAY",
  //     "02n": "PARTLY_CLOUDY_NIGHT",
  //     "03d": "PARTLY_CLOUDY_DAY",
  //     "03n": "PARTLY_CLOUDY_NIGHT",
  //     "04d": "CLOUDY",
  //     "04n": "CLOUDY",
  //     "09d": "RAIN",
  //     "09n": "RAIN",
  //     "10d": "RAIN",
  //     "10n": "RAIN",
  //     "11d": "RAIN",
  //     "11n": "RAIN",
  //     "13d": "SNOW",
  //     "13n": "SNOW",
  //     "50d": "FOG",
  //     "50n": "FOG",
  //   };

  //   return (
  //     <div className="canvas emoji">
  //       <ReactAnimatedWeather
  //         icon={codeMapping[iconCode]}
  //         color="#1e1e1e"
  //         size={64}
  //         animate={true}
  //       />
  //     </div>
  //   );
  // }
  function handleForecast(response) {
    // to be fixed
    let forecasts = response.data.daily;
    console.log(forecasts);
  }
  function handleForecastUrl(response) {
    let coords = [
      response.data[0].lat.toFixed(2),
      response.data[0].lon.toFixed(2),
    ];
    console.log(coords);
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&cnt=5&appid=${urlKey}&&units=metric`;

    axios.get(forecastUrl).then(handleForecast);
  }
  function getCityCoords(city) {
    let cityApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${urlKey}`;

    axios.get(cityApiUrl).then(handleForecastUrl);
  }
  if (show) {
    getCityCoords(city);
  }
  return <div className="forecast row" id="forecast-section"></div>;
}

export default Forecast;
