import {Component} from "react";
import React from "react";

export default class Previous extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "ArrowPrev"
        }
    }

    render() {
        return (
            <div className={this.state.class}>
            </div>
        )
    }
}
