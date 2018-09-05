// ###### ChoresList page #####
class ChoresListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
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
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.type} onChange={this.onChange}/>
                    <button>Add</button>
                </form>
                <ChoresConatiner addChore={this.props.add3} chores={this.state.chores}/>
                <Link to="/table">
                    <Next/>
                </Link>
            </div>
        );
    }
}

class ChoresConatiner extends React.Component {
    state = {
        chores: this.props.chores
    }

    componentDidMount(){
        this.props.addChore(this.generateNames());
    }

    componentDidUpdate(prevProps){
        if(prevProps.chores !== this.props.chores){
            this.setState({
                chores: this.props.chores
            }, ()=>{
                this.props.addChore(this.generateNames());
            })

        }
    }

{rows.map((cell, index)=> createData( cell, index, this.props.cellChores, 4.0))}

    generateNames = () => {
        return this.state.chores.map((item, index) => <div key={index} style={choresCardStyle}>{item}</div>)
    }

    render() {
        return (
            <div style={namesContainerStyle}>
                {this.generateNames()}
            </div>
        )
    }
}