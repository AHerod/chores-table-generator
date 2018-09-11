import {Component} from "react";
import {Link} from "react-router-dom";
import React from "react";

export default class Start extends Component {
    render() {
        return (
            <div>
                <h1>Create household chores plan for You and Your Roomies</h1>
                <Link to="/names">
                    <button className="btn grow">START</button>
                </Link>
            </div>
        )
    }
}
