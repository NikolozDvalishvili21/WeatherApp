import React from "react";
import "./WeatherApp.css";

const WeatherApp = () => {
  let api_key = "7f5921641b6224dde8b1bc0b6de4b752";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");

    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const weather_location =
      document.getElementsByClassName("weather-location");
    const weather_temp = document.getElementsByClassName("weather-temp");
    const wind_rate = document.getElementsByClassName("wind-rate");

    humidity[0].innerHTML = data.main.humidity + "%";
    weather_location[0].innerHTML = data.name;
    weather_temp[0].innerHTML = Math.round(data.main.temp) + "°C";
    wind_rate[0].innerHTML = data.wind.speed + "Km/h";
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search..." />
        <button
          onClick={() => {
            search();
          }}
        >
          Confirm
        </button>
      </div>

      <div className="weather-location">
        Enter City <br />
        to see...
      </div>
      <div className="weather-temp"></div>

      <div className="data-container">
        <div className="data">
          <div className="humidity-percent"></div>
          <div className="humidity-text">Humidity</div>
        </div>
        <div className="data">
          <div className="wind-rate"></div>
          <div className="humidity-text">Wind Speed</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
