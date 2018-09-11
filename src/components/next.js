import {Component} from "react";
import React from "react";

export default class Next extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "ArrowNext"
        }
    }

    render() {
        return (
            <div className={this.state.class}>
            </div>
        )
    }
}