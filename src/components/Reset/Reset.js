import React from "react";
import "./Reset.css"

const Reset = props => (
    <div 
        className="reset-button"
    >
        <button 
            type="button"
            className="btn btn-primary"
            id="reset"
            onClick={() => props.handleReset()}>{props.reset}
        </button>
    </div>
)

export default Reset;