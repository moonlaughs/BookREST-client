import React from "react";
import { Link } from "react-router-dom";

export default function DisclaimerBar() {
    return (
        <Link to={`/disclaimer`}>
            <div style={{ backgroundColor: "darkred", height: "26px", textAlign: "center" }}>
               <p style={{color: "white"}}><strong>PLEASE READ OUR DISCLAIMER ! PLEASE READ OUR DISCLAIMER ! PLEASE READ OUR DISCLAIMER !</strong></p>
            </div>
        </Link>
    )
}