import React, {Component} from 'react';
import "./sass/main.css"
import {render} from 'react-dom';
import TableChores from './table.';
import {PDFExport, savePDF} from '@progress/kendo-react-pdf';
import NewTable from './newTable.js';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import './App.css';

// ###### Main page #####
const mainPageStyle = {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
};

const choresCardStyle = {
    width: "180px",
    height: "120px",
    border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
const namesContainerStyle = {
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "480px",
    width: "1000px",
    flexWrap: "wrap"
}
const hint = {
    width: "30px",
    height: "30px"
}


class MainPage extends Component {
    render() {
        return (
            <div style={mainPageStyle} className="firstPage" >
                <Start/>
                <Link to="/names" >
                    <Next/>
                </Link>
            </div>
        )
    }
}
//component for main heading and start button
class Start extends Component {
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

//component for switching to next section
class Next extends Component {
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

class Previous extends Component {
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

class NamesPage extends React.Component {
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
            <div style={mainPageStyle}>
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

class NamesConatiner extends React.Component {
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
            <div style={namesContainerStyle}>
                {this.generateNames()}
            </div>
        )
    }
}

// ###### ChoresList page #####
class ChoresListPage extends React.Component {
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
            <div style={mainPageStyle}>
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

class ChoresConatiner extends React.Component {
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
            <div style={namesContainerStyle}>
                {this.generateNames()}
            </div>
        )
    }
}

class Hint extends React.Component {
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
                <div className="hint" style={hint} onClick={this.showHint}>Hint</div>
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

// ###### Table page #####
class ChoresTablePage extends React.Component {
    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
    }

    render() {

        return (
            <div style={mainPageStyle}>
                <Link to="/chorelist">
                    <Previous/>
                </Link>
                <h1>Divide up chores</h1>
                <div className="tablePage">

                    <div className="namesList">
                        {this.props.add2}
                    </div>
                <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize="A4" landscape={true}>
                    {/*<TableChores cellChores={this.props.add4} cellNames ={this.props.add2}/>*/}
                </PDFExport>
                    <NewTable  cellChores={this.props.add4} cellNames ={this.props.add2}/>

                    <button onClick={this.exportPDFWithComponent} className="btnDownLoad btn grow">DOWNLOAD</button>

                </div>
                <Link to="final">
                    <Next/>
                </Link>
                <div className="tools"></div>

            </div>
        )
    }
}

class FinalPage extends React.Component {
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
                <div style={mainPageStyle}>
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
class NotFound extends React.Component {
    render() {
        return (
            <div className="NotFound">
                <h1>404 Page not found</h1>
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: [],
            chore: []
        };
    }

    addNameContainer = names => {
        this.setState({name: names});
    };
    addChoreContainer = chores => {
        this.setState({chore: chores});
    };

    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/names" render={(props) => <NamesPage {...props} names={this.state.name}
                                                                           add1={this.addNameContainer}/>}/>
                        <Route path="/chorelist" render={(props) => <ChoresListPage {...props} chores={this.state.chore}
                                                                                    add3={this.addChoreContainer}/>}/>
                        <Route path="/table" render={(props) => <ChoresTablePage {...props} add2={this.state.name}
                                                                                 add1={this.addNameContainer}
                                                                                 add4={this.state.chore}
                                                                                 add3={this.addChoreContainer}/>}/>
                        <Route path="/final" component={FinalPage}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
