import React from "react";
import {Link} from "react-router-dom";
import Previous from "./previous";

export default class FinalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValidation: "",
            emailValidation: "",
            mssgValidation: "",
            name: "",
            email: "",
            mssg: "",
            select: "",
            shown: true,
            type: '',
            flex: {flexDirection: "row"}

        }
    }

    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
    }

    showForm = (event) => {
        event.preventDefault();
        this.setState({
            shown: !this.state.shown

        });
    }
    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    };
    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    };
    handleMssgChange = (event) => {
        this.setState({mssg: event.target.value});
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({nameValidation: event.target.value});
        this.setState({emailValidation: event.target.value});
        this.setState({mssgValidation: event.target.value});
        console.log("formularz przesłany!");

        if (this.state.name === "") {
            console.log("name sprawdzony");
            this.setState({nameValidation: "Write your name"})
        }
        if (!this.state.email.includes("@")) {
            console.log("email sprawdzony");
            this.setState({emailValidation: "Addressee's email must be set and valid"})
        }
        if (this.state.mssg === "") {
            console.log("mssg sprawdzony");
            this.setState({mssgValidation: "Message box cannot be empty"})
        }
        if(!(this.state.name === "") && this.state.email.includes("@") && !(this.state.mssg === "") ){
            console.log("name git");

        }
    }
    render()
    {
        let shown = {
            display: this.state.shown ? "block" : "none"
        };

        let hidden = {
            display: this.state.shown ? "none" : "block"
        };
        return (
            <div className="mainPageStyle">
                <Link to="/table">
                    <Previous/>
                </Link>
                <div className="infoMssg">
                    <h1>Your plan is ready!</h1>
                </div>
                <div className="btnContainer" style = {this.state.flex}>
                    <button className="btnF" onClick={this.exportPDFWithComponent}>Download</button>
                    <button className="btnF" onClick={this.showForm}>Send By Mail</button>

                </div>
                <div style={hidden}>

                    <form onSubmit={this.handleSubmit} noValidate className="formFinal">
                        <span className="validation">{this.state.nameValidation}</span>
                        <input  className="formName" value={this.state.name} onChange={this.handleNameChange} placeholder="Your name"/>
                        <span className="validation">{this.state.emailValidation}</span>
                        <input  className="formEmail" type ="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Addressee's email"/>
                        <span className="validation">{this.state.mssgValidation} </span>
                        <textarea  className="formMssg" value={this.state.mssg} onChange={this.handleMssgChange}  placeholder="Your message"></textarea>
                        <input  type="submit" className="btn"/>
                    </form>
                </div>
            </div>
        )
    }

}
