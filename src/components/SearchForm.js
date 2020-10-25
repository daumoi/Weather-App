import React from "react";
import { connect } from "react-redux";
import { Search } from "@material-ui/icons";
import { searchCountry } from "../api";
import "./SearchForm.css";

export const SearchForm = ({ setResults, setLoading }) => {
    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        searchCountry(e.target.search.value).then((data) => {
            setResults(data);
            setLoading(false);
        });
    };

    return (
        <form id="search-form" onSubmit={submitHandler}>
            <Search />
            <input
                type="text"
                name=""
                id="search"
                placeholder="search location"
                autoComplete="off"
            />
            <button>Search</button>
        </form>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
