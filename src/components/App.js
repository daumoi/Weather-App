import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import DetailWeather from "./DetailWeather";
import { setLocationCity } from "../store/citySlice";

export function App({ setLocationCity }) {
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

const mapDispatchToProps = { setLocationCity };

export default connect(mapStateToProps, mapDispatchToProps)(App);
