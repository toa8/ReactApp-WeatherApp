import React from "react";
import "../index.css";

const WeatherDisp = ({ weather }) => {
  return (
    <div className="context">
      <p>Temperature : {weather.temperature}</p>
      <p>Wind : {weather.wind}</p>
      <p>{weather.description}</p>
    </div>
  );
};

export default WeatherDisp;
