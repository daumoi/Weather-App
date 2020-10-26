import React from "react";
import { connect } from "react-redux";
import Weather from "./Weather";
import "./ListWeathers.css";

export const ListWeathers = ({ weathers, CF }) => {
    return (
        <div className="list-weathers">
            {weathers.map((x, i) => (
                <Weather key={i} index={i} weather={x} CF={CF} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListWeathers);
