import React, {Component} from 'react';
import "./sass/main.css"
import {render} from 'react-dom';
import TableChores from './components/table.';
import {PDFExport, savePDF} from '@progress/kendo-react-pdf';
import NewTable from './components/newTable';
import Next from './components/next';
import Previous from './components/previous';
import MainPage from './components/mainPage';
import NamesPage from './components/namesPage';
import ChoresListPage from './components/choresListPage';
import ChoresTablePage from './components/tablePage';
import FinalPage from './components/finalPage'
import NotFound from './components/nofFoundPage'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import './App.css';

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
