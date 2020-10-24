import React from "react";
import { connect } from "react-redux";
import ListWeathers from "./ListWeathers";
import TodayHightlight from "./TodayHightlight";
import Footer from "./Footer";
import CFButton from "./CFButton";
import "./DetailWeather.css";

export const DetailWeather = () => {
    return (
        <div className="detail-weather">
            <div className="detail-container">
                <CFButton />
                <ListWeathers />
                <TodayHightlight />
                <Footer />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailWeather);
