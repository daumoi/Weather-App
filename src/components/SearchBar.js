import React, { useState } from "react";
import { connect } from "react-redux";
import { Clear } from "@material-ui/icons";
import SearchForm from "./SearchForm";
import CityResult from "./CityResult";
import ReactLoading from "react-loading";
import "./SearchBar.css";

export const SearchBar = () => {
    const [results, setResults] = useState([]);
    const [isLoading, setLoading] = useState(false);

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
            <SearchForm setResults={setResults} setLoading={setLoading} />
            {isLoading ? (
                <div className="loading">
                    <ReactLoading type="spin" color="var(--gray-5)" />
                </div>
            ) : (
                <div className="result">
                    {results.map((x, i) => (
                        <CityResult key={i} data={x} close={closeHandler} />
                    ))}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
