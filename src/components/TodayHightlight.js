import React from "react";
import { connect } from "react-redux";
import { Navigation } from "@material-ui/icons";
import Loading from "./Loading";
import "./TodayHightlight.css";

export const TodayHightlight = ({ isLoading, highLight }) => {
    return (
        <div className="today-hightlight">
            <h2>Today's Hightlights</h2>
            <div className="detail-hightlight">
                <div className="wind-status">
                    <p className="title">Wind status</p>
                    {isLoading ? (
                        <>
                            <Loading width={150} height={60} />
                            <Loading width={75} height={24} />
                        </>
                    ) : (
                        <>
                            <p className="number">
                                <span>{Math.floor(highLight.wind_speed)}</span>
                                <span> mph</span>
                            </p>
                            <p className="wind-direction">
                                <Navigation />
                                <span>{highLight.wind_direction_compass}</span>
                            </p>
                        </>
                    )}
                </div>
                <div className="humidity">
                    <p className="title">Humidity</p>
                    {isLoading ? (
                        <Loading width={150} height={60} />
                    ) : (
                        <p className="number">
                            <span>{highLight.humidity}</span>
                            <span> %</span>
                        </p>
                    )}

                    <div className="range">
                        <div
                            className="slide"
                            style={{
                                width: isLoading
                                    ? "0"
                                    : highLight.humidity + "%",
                            }}
                        ></div>
                        <div className="start">0</div>
                        <div className="middle">50</div>
                        <div className="end">100</div>
                        <div className="percent">%</div>
                    </div>
                </div>
                <div className="visibility">
                    <p className="title">Visibility</p>
                    {isLoading ? (
                        <Loading width={150} height={60} />
                    ) : (
                        <p className="number">
                            <span>{highLight.visibility.toFixed(1)}</span>
                            <span> miles</span>
                        </p>
                    )}
                </div>
                <div className="air-pressure">
                    <p className="title">Air Pressure</p>
                    {isLoading ? (
                        <Loading width={150} height={60} />
                    ) : (
                        <p className="number">
                            <span>{Math.floor(highLight.air_pressure)}</span>
                            <span> mb</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({ isLoading: state.isLoading });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodayHightlight);
