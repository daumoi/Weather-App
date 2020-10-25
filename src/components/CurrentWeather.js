import React from "react";
import { connect } from "react-redux";
import SearchButton from "./SearchButton";
// import CFButton from "./CFButton";
import LocationButton from "./LocationButton";
import "./CurrentWeather.css";
import ImageWeather from "./ImageWeather";
import { LocationOn } from "@material-ui/icons";
import Loading from "./Loading";

export const CurrentWeather = ({ weather, isLoading, city }) => {
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
                            marginTop: "45px",
                        }}
                    />
                    <Loading
                        width={150}
                        height={42}
                        style={{
                            marginTop: "45px",
                        }}
                    />
                    <Loading
                        width={150}
                        height={20}
                        style={{
                            marginTop: "45px",
                        }}
                    />
                    <Loading
                        width={150}
                        height={28}
                        style={{
                            marginTop: "15px",
                            marginBottom: "20px",
                        }}
                    />
                </>
            ) : (
                <>
                    <ImageWeather weatherState="lightrain" />
                    <p className="temperature">
                        <span>{Math.floor(weather.the_temp)}</span>
                        <span>&deg;C</span>
                    </p>
                    <p className="weather-state">
                        {weather.weather_state_name}
                    </p>
                    <p className="day">
                        <span>Today</span>
                        <span> • </span>
                        <span>
                            {new Date(weather.applicable_date)
                                .toUTCString()
                                .slice(0, 11)}
                        </span>
                    </p>
                    <p className="location">
                        <span>
                            <LocationOn />
                        </span>
                        <span>{city}</span>
                    </p>
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    weather: state.weathers[0],
    city: state.city.name,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
