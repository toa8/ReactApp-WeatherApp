import React, { useState } from "react";
// CSS FILES
import "../index.css";
// COMPONENTS
import Header from "./Header";
import WeatherDisp from "./WeatherDisp";

let value = false;

const WeatherPage = () => {
  const [weather, setWeather] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getLocation = (e) => {
    let location = e.currentTarget.value;
    setInputValue(location);
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://goweather.herokuapp.com/weather/${inputValue}}`
    );
    const data = await response.json();
    setWeather(data);
    value = true;
  };

  return (
    <div>
      <Header />
      <div className="display">
        <div className="inputArea">
          <input
            type="text"
            className="input"
            placeholder="Enter a Location"
            onChange={getLocation}
            maxLength="15"
          />
          <button className="btn" onClick={fetchData}>
            Search
          </button>
        </div>
        <div className="contextDisp">
          {value ? <WeatherDisp weather={weather} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
