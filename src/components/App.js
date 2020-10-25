import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchCity } from "../api";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import DetailWeather from "./DetailWeather";
import { setCity, setLocationCity } from "../store/citySlice";

export function App({ setCity, setLocationCity }) {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords }) =>
            setLocationCity({ latt: coords.latitude, long: coords.longitude })
        );
    });

    return (
        <>
            <SearchBar />
            <CurrentWeather />
            <DetailWeather />
        </>
    );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { setCity, setLocationCity };

export default connect(mapStateToProps, mapDispatchToProps)(App);
