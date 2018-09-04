import React, { Component } from 'react';
import arrow from './arrow.svg';
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
  width: "220px",
  height: "220px",
  border: "2px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const hint = {
  width: "30px",
  height:"30px"
}

class MainPage extends Component{
  render(){
  return(
          <div style={mainPageStyle}>
            <Start/>
            <Link to = "/roomiesnumber">
            <Next/>
            </Link>

          </div>
        )
  }
}
//component for main heading and start button
class Start extends Component{
  render(){
    return(
            <div>
              <h1>Create household chores plan for you and your Roomies</h1>
              <button>START</button>
            </div>
          )
  }
}
//component for switching to next section
class Next extends Component{
  constructor(props) {
    super(props);
    this.state = {
      class: "ArrowNext"
    }
  }
  render(){
   return(
           <div >
             <img src={arrow} className= {this.state.class} alt="arrow"/>
           </div>
         )
  }
}
class Previous extends Component{
  constructor(props) {
    super(props);
    this.state = {
      class: "ArrowPrev"
    }
  }
  render(){
    return(
            <div >
              <img src={arrow} className= {this.state.class} alt="arrow"/>
            </div>
          )
  }
}

// ###### RoomMates Number page #####
class RoomiesNumberPage extends Component{
  render(){
  return (
          <div  style={mainPageStyle}>
            <Link to = "/">
            <Previous/>
            </Link>
            <h1>Type a number of roommates at your flat</h1>
            <Link to = "/names">
            <Next/>
            </Link>
          </div>
        )
  }
}
// ###### RoomMates Number page #####
class NamesPage extends Component{
  render(){
    return(
            <div style={mainPageStyle}>
              <Link to = "/roomiesnumber">
              <Previous/>
              </Link>
              <CardContainer/>
              <Link to = "/chorelist">
              <Next/>
              </Link>
            </div>
          )
  }
}
class CardContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {flexDirect: "row"}
  }
  render(){
    return (
            <div className= "cardContainer" style={{flexDirection:this.state.flexDirect}}>
              <div style ={nameCardStyle}>
                <input type="text"/>
              </div>
            </div>

          )
  }
}

// ###### ChoresList page #####
class ChoresListPage extends React.Component{
  render(){
    return(
      <div style={mainPageStyle}>
        <Link to = "/names">
        <Previous/>
        </Link>
        <h1>Add chores you would like to share</h1>
        <AddChore/>
        <Link to = "/table">
        <Next/>
        </Link>
      </div>
    )
  }
}
class AddChore extends React.Component{
  render(){
    return(
            <div>
              <input type ="text"/>
              <div className="hint" style ={hint}>Hint</div>
              <div>Vacuuming, sweeping, dusting,Washing and putting away the dishes, clean bathroom, empty waste paper bins, clean windows</div>
              <div className="addedChores">

              </div>
            </div>
          )
  }
}
// ###### Table page #####
class ChoresTablePage extends React.Component{
  render(){
    return(
      <div style={mainPageStyle}>
        <Link to = "/chorelist">
        <Previous/>
        </Link>
        <h1>Divide up chores</h1>
        <CardContainer/>
        <Table/>
        <Link to = "final">
        <Next/>
        </Link>
      </div>
    )
  }
}

class Table extends React.Component{
  render(){
      return <h1>tu będzie tabela</h1>
  }
}

class FinalPage extends React.Component{
  render(){
   return(
     <div style={mainPageStyle}>
       <Link to = "/table">
       <Previous/>
       </Link>
       <h1>Your plan is ready!</h1>
       <h2>Now you can download it & Print</h2>
       <h3>or</h3>
       <h2>send by mail to your roommates</h2>
       <div style = {{display: "flex"}}>
         <button>Download</button>
         <button>Send</button>
       </div>
     </div>
   )
  }
}


class App extends Component {
  render() {
    return (
      <HashRouter>

      <div>
        <Switch>
              <Route  exact path ="/" component = {MainPage}/>
              <Route  path ="/roomiesnumber" component = {RoomiesNumberPage}/>
              <Route  path ="/names" component = {NamesPage}/>
              <Route  path ="/chorelist" component = {ChoresListPage}/>
              <Route  path ="/table" component = {ChoresTablePage}/>
              <Route  path ="/final" component = {FinalPage}/>
        </Switch>
              {/*<RoomiesNumberPage/>*/}
              {/*<NamesPage/>*/}
              {/*<ChoresListPage/>*/}
              {/*<ChoresTablePage/>*/}
              {/*<FinalPage/>*/}
            </div>
            </HashRouter>
          );
  }
}
export default App;
