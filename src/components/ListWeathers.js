import React from "react";
import { connect } from "react-redux";
import Weather from "./Weather";
import "./ListWeathers.css";

export const ListWeathers = ({ weathers, CF }) => {
    return (
        <div className="list-weathers">
            {weathers.map((x, i) => (
                <div className="col" key={i}>
                    <Weather index={i} weather={x} CF={CF} />
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListWeathers);
