import React from "react";
import { connect } from "react-redux";
import "./SearchButton.css";

export const SearchButton = () => {
    return <button className="search-btn">Search for places</button>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
