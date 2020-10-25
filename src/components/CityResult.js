import React from "react";
import { connect } from "react-redux";
import { KeyboardArrowRight } from "@material-ui/icons";
import { setCity } from "../store/citySlice";
import "./CityResult.css";

export const CityResult = ({ data, close, setCity }) => {
    const clickHandler = () => {
        close();
        setCity(data);
    };

    return (
        <div className="city-result" onClick={clickHandler}>
            <p>{data.name}</p>
            <KeyboardArrowRight />
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { setCity };

export default connect(mapStateToProps, mapDispatchToProps)(CityResult);
