import React from "react";
import {Link} from "react-router-dom";
import Previous from "./previous";
import Next from "./next";
import NamesConatiner from "./namesContainer";

export default class NamesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            names: this.props.names
        };
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            names: [...this.state.names, this.state.term]
        });
    }

    render() {
        return (
            <div className="mainPageStyle">
                <Link to="/">
                    <Previous/>
                </Link>
                <h1>Type your roomies' names</h1>
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange} className="input"/>
                    <button className="btnAdd">Add</button>
                </form>
                <NamesConatiner add={this.props.add1} names={this.state.names}/>

                <Link to="/chorelist">
                    <Next/>
                </Link>
                <div className="girlPic"></div>

            </div>
        );
    }
}
