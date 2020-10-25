import React from "react";
import { connect } from "react-redux";
import "./SearchButton.css";

export const SearchButton = () => {
    const clickHandler = () => {
        document.getElementById("search-bar").classList.add("active");
    };

    return (
        <button className="search-btn" onClick={clickHandler}>
            Search for places
        </button>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
