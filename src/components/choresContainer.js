import React from "react";

export default class ChoresConatiner extends React.Component {
    state = {
        chores: this.props.chores
    };

    componentDidMount() {
        this.props.addChore(this.generateNames());
    }

    componentDidUpdate(prevProps) {
        if (prevProps.chores !== this.props.chores) {
            this.setState({
                chores: this.props.chores
            }, () => {
                this.props.addChore(this.generateNames());
            })

        }
    }


    generateNames = () => {
        return this.state.chores.map((item, index) => {
            return typeof item === 'string' ? <div key={index} className="choreCard">{item}</div> : item
        })
    };

    render() {
        return (
            <div className="namesContainerStyle">
                {this.generateNames()}
            </div>
        )
    }
}
