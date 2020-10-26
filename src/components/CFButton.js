import React from "react";
import { connect } from "react-redux";
import { setCF } from "../store/CFSlice";
import "./CFButton.css";

export const CFButton = ({ setCF, CF }) => {
    return (
        <div className="cf-btn">
            <button disabled={CF === "C"} onClick={() => setCF("C")}>
                &deg;C
            </button>
            <button disabled={CF === "F"} onClick={() => setCF("F")}>
                &deg;F
            </button>
        </div>
    );
};

const mapStateToProps = (state) => ({ CF: state.CF });

const mapDispatchToProps = { setCF };

export default connect(mapStateToProps, mapDispatchToProps)(CFButton);
