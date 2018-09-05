import React, {Component} from 'react';
import arrow from './arrow.svg';
import Hexagon from 'react-hexagon';
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
    height: "100vh"
};
const nameCardStyle = {
    width: "120px",
    height: "120px",
    border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "30%"
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
    width: "600px",
    flexWrap: "wrap"
}
const hint = {
    width: "30px",
    height: "30px"
}

class MainPage extends Component {
    render() {
        return (
            <div style={mainPageStyle}>
                <Start/>
                <Link to="/names">
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
                <h1>Create household chores plan for you and your Roomies</h1>
                <Link to="/names">
                    <button>START</button>
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
            <div>
                <img src={arrow} className={this.state.class} alt="arrow"/>
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
            <div>
                <img src={arrow} className={this.state.class} alt="arrow"/>
            </div>
        )
    }
}

// ###### RoomMates Number page #####
// class RoomiesNumberPage extends Component{
//     constructor(props){
//         super(props);
//         this.state = {roomiesNum: ""}
//     }
//     changeInput = (event) =>{
//         const x = new Array(parseInt(this.state.roomiesNum,1));
//         console.log(x);    };
//
//     render(){
//   return (
//           <div  style={mainPageStyle}>
//             <Link to = "/">
//             <Previous/>
//             </Link>
//             <h1>Type a number of roommates at your flat</h1>
//               <input type= "number" value={this.state.roomiesNum} onChange={this.changeInput}/>
//             <Link to = "/names">
//             <Next/>
//             </Link>
//           </div>
//         )
//   }
// }
// ###### RoomMates Number page #####
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
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange}/>
                    <button>Add</button>
                </form>
                <NamesConatiner add={this.props.add1} names={this.state.names}/>
                <Link to="/chorelist">
                    <Next/>
                </Link>
            </div>
        );
    }
}

class NamesConatiner extends React.Component {
    state = {
        names: this.props.names
    }

    componentDidMount(){
        this.props.add(this.generateNames());
    }

    componentDidUpdate(prevProps){
        if(prevProps.names !== this.props.names){
            this.setState({
                names: this.props.names
            }, ()=>{
                this.props.add(this.generateNames());
            })

        }
    }


    generateNames = () => {
        return this.state.names.map((item, index) => <div key={index} style={choresCardStyle}>{item}</div>)
    }

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
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange}/>
                    <button>Add</button>
                </form>
                <ChoresConatiner add={this.props.add1} names={this.state.names}/>
                <Link to="/chorelist">
                    <Next/>
                </Link>
            </div>
        );
    }
}
class ChoresConatiner extends React.Component {
    state = {
        names: this.props.names
    }

    componentDidMount(){
        this.props.add(this.generateNames());
    }

    componentDidUpdate(prevProps){
        if(prevProps.names !== this.props.names){
            this.setState({
                names: this.props.names
            }, ()=>{
                this.props.add(this.generateNames());
            })

        }
    }


    generateNames = () => {
        return this.state.names.map((item, index) => <div key={index} style={choresCardStyle}>{item}</div>)
    }

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
    addChore = (event) => {
        event.preventDefault();

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
                <div style={hidden}>
                    <button onClick={this.addChore}>vacuuming</button>
                    <button>washing and putting away the dishes</button>
                    <button>empty waste paper bins</button>
                    <button>clean windows</button>
                </div>
                <div style={shown}>

                </div>
            </div>
        )
    }
}
// ###### Table page #####
class ChoresTablePage extends React.Component {

    render() {
        return (
            <div style={mainPageStyle}>
                <Link to="/chorelist">
                    <Previous/>
                </Link>
                <h1>Divide up chores</h1>
                <div>
                    {this.props.add2}
                </div>
                <Table/>
                <Link to="final">
                    <Next/>
                </Link>
            </div>
        )
    }
}
class Table extends React.Component {
    render() {
        return <h1>tu będzie tabela</h1>
    }
}
class FinalPage extends React.Component {
    render() {
        return (
            <div style={mainPageStyle}>
                <Link to="/table">
                    <Previous/>
                </Link>
                <h1>Your plan is ready!</h1>
                <h2>Now you can download it & Print</h2>
                <h3>or</h3>
                <h2>send by mail to your roommates</h2>
                <div style={{display: "flex"}}>
                    <button>Download</button>
                    <button>Send</button>
                </div>
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {name: []};
    }

    addNameContainer = names => {
        this.setState({name: names});
    };

    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/names" render={(props) => <NamesPage {...props} names={this.state.name} add1={this.addNameContainer}/>}/>
                        <Route path="/chorelist" render={(props) => <ChoresListPage {...props} names={this.state.name} add1={this.addNameContainer}/>}/>
                        <Route path="/chorelist" component={ChoresListPage}/>
                        <Route path="/table" render={(props) => <ChoresTablePage {...props} add2={this.state.name} add1={this.addNameContainer}/>}/>
                        <Route path="/final" component={FinalPage}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
