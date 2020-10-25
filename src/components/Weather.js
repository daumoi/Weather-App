import React from "react";
import { connect } from "react-redux";
import ImageWeather from "./ImageWeather";
import Loading from "./Loading";
import "./Weather.css";

export const Weather = ({ isLoading, index, weather }) => {
    return (
        <div className="weather">
            <p className="day">
                {index === 0
                    ? "Tomorrow"
                    : new Date(weather.applicable_date)
                          .toUTCString()
                          .slice(0, 11)}
            </p>
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
                    <ImageWeather weatherState={weather.weather_state_abbr} />
                    <div className="temperature">
                        <p className="max">
                            <span>{Math.floor(weather.max_temp)}</span>
                            <span>&deg;C</span>
                        </p>
                        <p className="min">
                            <span>{Math.floor(weather.min_temp)}</span>
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
