import React from "react";
import { connect } from "react-redux";
import Weather from "./Weather";
import "./ListWeathers.css";

export const ListWeathers = () => {
    return (
        <div className="list-weathers">
            {[0, 0, 0, 0, 0].map((x, i) => (
                <Weather key={i} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListWeathers);
