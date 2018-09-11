import React from "react";

export default class NamesConatiner extends React.Component {
    state = {
        names: this.props.names,
        shown: true,

    };

    componentDidMount() {

        this.props.add(this.generateNames());

    }

    componentDidUpdate(prevProps) {
        if (prevProps.names !== this.props.names) {
            this.setState({
                names: this.props.names
            }, () => {
                this.props.add(this.generateNames());
            })

        }
    }


    generateNames = () => {


        // const colors = ['#12530D', '#E8AB0C', '#FF0000', '#1C0CE8'];
        // const random_color = colors[Math.floor(Math.random() * colors.length)];
        // const randomNameBg ={
        //     backgroundColor: random_color
        // }
        // style={randomNameBg}
        return this.state.names.map((item, index) => {


            return typeof item === "string" ? <div key={index} className="nameCard" >{item}</div> : item
        })
    };

    render() {

        return (
            <div className= "namesContainerStyle">
                {this.generateNames()}
            </div>
        )
    }
}
