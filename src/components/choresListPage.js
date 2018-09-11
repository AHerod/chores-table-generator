import React from "react";
import {Link} from "react-router-dom";
import Previous from "./previous";
import Next from "./next";
import ChoresConatiner from "./choresContainer";
import Hint from "./hint"

export default class ChoresListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            term: '',
            chores: this.props.chores
        };
    }

    onChange = (event) => {
        this.setState({type: event.target.value});
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            type: '',
            chores: [...this.state.chores, this.state.type]
        });
    }

    render() {
        return (
            <div className="mainPageStyle">
                <Link to="/names">
                    <Previous/>
                </Link>
                <h1>Type chores you want to share</h1>
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.type} onChange={this.onChange} className="input"/>
                    <Hint addChore={this.props.add3} chores={this.state.chores}/>
                    <button className="btnAdd">Add</button>
                </form>
                <ChoresConatiner addChore={this.props.add3} chores={this.state.chores}/>
                <Link to="/table">
                    <Next/>
                </Link>
                <div className="utenPic"></div>
            </div>
        );
    }
}
