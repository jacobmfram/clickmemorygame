import React from "react";
import "./Result.css";

const Result = props => (
    <div className="result">
        <h3>{props.title}</h3>
        <h3>Score: {props.score}</h3>
    </div>
)

export default Result;