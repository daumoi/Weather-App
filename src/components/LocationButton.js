import React from "react";
import { connect } from "react-redux";
import { GpsFixed } from "@material-ui/icons";
import { setLocationCity } from "../store/citySlice";
import "./LocationButton.css";

export const LocationButton = ({ setLocationCity }) => {
    const clickHandler = () => {
        navigator.geolocation.getCurrentPosition(({ coords }) =>
            setLocationCity({ latt: coords.latitude, long: coords.longitude })
        );
    };

    return (
        <button className="location-btn" onClick={clickHandler}>
            <GpsFixed />
        </button>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { setLocationCity };

export default connect(mapStateToProps, mapDispatchToProps)(LocationButton);
