import {Component} from "react";
import {Link} from "react-router-dom";
import Next from "./next";
import React from "react";
import Start from "./start";

export default class MainPage extends Component {
    render() {
        return (
            <div className="firstPage mainPageStyle" >
                <Start/>
                <Link to="/names" >
                    <Next/>
                </Link>
            </div>
        )
    }
}
