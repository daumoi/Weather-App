import React, { useEffect } from "react";
import { searchCountry } from "../api";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import DetailWeather from "./DetailWeather";

export default function App() {
    return (
        <>
            <SearchBar />
            <CurrentWeather />
            <DetailWeather />
        </>
    );
}
