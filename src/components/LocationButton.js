import React from "react";
import { connect } from "react-redux";
import { GpsFixed } from "@material-ui/icons";
import "./LocationButton.css";

export const LocationButton = () => {
    return (
        <button className="location-btn">
            <GpsFixed />
        </button>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LocationButton);
