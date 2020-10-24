import React from "react";
import { connect } from "react-redux";
import "./CFButton.css";

export const CFButton = () => {
    return (
        <div className="cf-btn">
            <button disabled>&deg;C</button>
            <button>&deg;F</button>
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CFButton);
