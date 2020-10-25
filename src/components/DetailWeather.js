import React from "react";
import { connect } from "react-redux";
import ListWeathers from "./ListWeathers";
import TodayHightlight from "./TodayHightlight";
import Footer from "./Footer";
import CFButton from "./CFButton";
import "./DetailWeather.css";

export const DetailWeather = ({ weathers, highLight }) => {
    return (
        <div className="detail-weather">
            <div className="detail-container">
                <CFButton />
                <ListWeathers weathers={weathers} />
                <TodayHightlight highLight={highLight} />
                <Footer />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    weathers: state.weathers.slice(1),
    highLight: state.weathers[0],
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailWeather);
