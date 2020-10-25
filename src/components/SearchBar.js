import React, { useState } from "react";
import { connect } from "react-redux";
import { Clear } from "@material-ui/icons";
import SearchForm from "./SearchForm";
import CityResult from "./CityResult";
import "./SearchBar.css";

export const SearchBar = () => {
    const [results, setResults] = useState([]);

    const closeHandler = () => {
        document.getElementById("search-bar").classList.remove("active");
    };

    return (
        <div id="search-bar">
            <div className="close-btn">
                <button onClick={closeHandler}>
                    <Clear />
                </button>
            </div>
            <SearchForm setResults={setResults} />
            <div className="result">
                {results.map((x, i) => (
                    <CityResult key={i} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
