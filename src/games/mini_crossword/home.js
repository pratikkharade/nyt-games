import React, { useState } from "react";
import './home.css';
import Puzzle from "./puzzle";
import Hints from "./hints";

export default function MiniCrossword() {

    return (
        <div className="mini-crossword-wrapper">
            <div className="puzzle-wrapper">
                <Puzzle />
            </div>
            <div className="hints-wrapper">
                <Hints />
            </div>
        </div>
    );
}

