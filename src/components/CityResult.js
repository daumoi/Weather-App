import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardArrowRight } from "@material-ui/icons";
import "./CityResult.css";

export const CityResult = ({ data }) => {
    return (
        <div className="city-result">
            <p>{data.city}</p>
            <KeyboardArrowRight />
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CityResult);
