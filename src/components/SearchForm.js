import React from "react";
import { connect } from "react-redux";
import { Search } from "@material-ui/icons";
import "./SearchForm.css";

export const SearchForm = ({ setResults }) => {
    const submitHandler = (e) => {
        e.preventDefault();
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
