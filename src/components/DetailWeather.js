import React from "react";
import { connect } from "react-redux";
import ListWeathers from "./ListWeathers";
import TodayHightlight from "./TodayHightlight";
import Footer from "./Footer";
import CFButton from "./CFButton";
import { convertToF } from "../api";
import "./DetailWeather.css";

export const DetailWeather = ({ weathers, highLight, CF }) => {
    return (
        <div className="detail-weather">
            <div className="detail-container">
                <CFButton />
                <ListWeathers
                    weathers={
                        CF === "C"
                            ? weathers
                            : weathers.map((x) => ({
                                  ...x,
                                  max_temp: convertToF(x.max_temp),
                                  min_temp: convertToF(x.min_temp),
                              }))
                    }
                    CF={CF}
                />
                <TodayHightlight highLight={highLight} />
                <Footer />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    weathers: state.weathers.slice(1),
    highLight: state.weathers[0],
    CF: state.CF,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailWeather);
