import React from "react";
import Snow from "../images/Snow.png";
import Sleet from "../images/Sleet.png";
import Hail from "../images/Hail.png";
import Thunderstorm from "../images/Thunderstorm.png";
import HeavyRain from "../images/HeavyRain.png";
import LightRain from "../images/LightRain.png";
import Showers from "../images/Shower.png";
import HeavyCloud from "../images/HeavyCloud.png";
import LightCloud from "../images/LightCloud.png";
import Clear from "../images/Clear.png";

export default function ImageWeather({ weatherState }) {
    const imgs = {
        sn: Snow,
        sl: Sleet,
        h: Hail,
        t: Thunderstorm,
        hr: HeavyRain,
        lr: LightRain,
        s: Showers,
        hc: HeavyCloud,
        lc: LightCloud,
        c: Clear,
    };
    return (
        <img className="image-weather" src={imgs[weatherState]} alt="weather" />
    );
}
