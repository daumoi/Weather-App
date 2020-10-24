import React from "react";
import { connect } from "react-redux";
import SearchButton from "./SearchButton";
// import CFButton from "./CFButton";
import LocationButton from "./LocationButton";
import "./CurrentWeather.css";
import ImageWeather from "./ImageWeather";
import { LocationOn } from "@material-ui/icons";
import Loading from "./Loading";

export const CurrentWeather = ({ weather = {}, isLoading }) => {
    return (
        <div className="current-weather">
            <SearchButton />
            <LocationButton />
            {isLoading ? (
                <>
                    <Loading width={150} height={150} />
                    <Loading
                        width={150}
                        height={150}
                        style={{
                            "margin-top": "45px",
                        }}
                    />
                    <Loading
                        width={150}
                        height={42}
                        style={{
                            "margin-top": "45px",
                        }}
                    />
                    <Loading
                        width={150}
                        height={20}
                        style={{
                            "margin-top": "45px",
                        }}
                    />
                    <Loading
                        width={150}
                        height={28}
                        style={{
                            "margin-top": "15px",
                            "margin-bottom": "20px",
                        }}
                    />
                </>
            ) : (
                <>
                    <ImageWeather weatherState="lightrain" />
                    <p className="temperature">
                        <span>15</span>
                        <span>&deg;C</span>
                    </p>
                    <p className="weather-state">Shower</p>
                    <p className="day">
                        <span>Today</span>
                        <span> • </span>
                        <span>Fri, 5 Jun</span>
                    </p>
                    <p className="location">
                        <span>
                            <LocationOn />
                        </span>
                        <span>Helsinki</span>
                    </p>
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({ isLoading: state.isLoading });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
