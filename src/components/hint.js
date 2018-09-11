import React from "react";

export default class Hint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shown: true,
        };
    }

    showHint = (event) => {
        event.preventDefault();
        this.setState({
            shown: !this.state.shown

        });
    }

    render() {
        let shown = {
            display: this.state.shown ? "block" : "none"
        };

        let hidden = {
            display: this.state.shown ? "none" : "block"
        }


        return (
            <div>
                <div className="hint"  onClick={this.showHint}>Hint</div>
                <div style={hidden} className="hints">
                    <span className="hintsBtn">vacuuming</span>
                    <span className="hintsBtn">washing and putting away the dishes</span>
                    <span className="hintsBtn">empty waste paper bins</span>
                    <span className="hintsBtn">clean windows</span>
                </div>

            </div>
        )
    }
}
