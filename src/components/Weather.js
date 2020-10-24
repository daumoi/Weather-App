import React from "react";
import { connect } from "react-redux";
import ImageWeather from "./ImageWeather";
import Loading from "./Loading";
import "./Weather.css";

export const Weather = ({ isLoading }) => {
    return (
        <div className="weather">
            <p className="day">Tomorrow</p>
            {isLoading ? (
                <>
                    <Loading width={60} height={67} />
                    <div className="temperature">
                        <Loading width={30} height={20} />
                        <Loading width={30} height={20} />
                    </div>
                </>
            ) : (
                <>
                    <ImageWeather />
                    <div className="temperature">
                        <p className="max">
                            <span>16</span>
                            <span>&deg;C</span>
                        </p>
                        <p className="min">
                            <span>11</span>
                            <span>&deg;C</span>
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({ isLoading: state.isLoading });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
