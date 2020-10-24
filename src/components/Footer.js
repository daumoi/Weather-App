import React from "react";
import { connect } from "react-redux";
import "./Footer.css";

export const Footer = () => {
    return (
        <footer>
            <p>
                <a href="#123">Tuấn Vũ</a>
                <span> @ </span>
                <a href="#245">DevChallenges.io</a>
            </p>
        </footer>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
