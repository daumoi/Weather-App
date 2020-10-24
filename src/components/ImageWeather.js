import React from "react";
import LightRain from "../images/LightRain.png";

export default function ImageWeather({ weatherState }) {
    return <img className="image-weather" src={LightRain} alt="weather" />;
}
