import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React, {Component} from 'react';


const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 24,

    },
    body: {
        fontSize: 24,

    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0;
function createData(chore,mon, tue, wed, thu, fri,sat, sun) {
    id += 1;
    return { id,chore, mon, tue, wed, thu, fri,sat, sun};
}
class CustomizedTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mon: "",
            tue: "",
            wed: "",
            thu: "",
            fri: "",
            sat: "",
            sun: "wolne"
        }
    }

render (){
    const { classes, cellChores } = this.props;
    const nameArray = [];
    nameArray.push(this.props.cellNames);
    console.log(nameArray);
    let rows = cellChores.map(chore => {

         return createData(chore.props.children, this.state.mon,this.state.tue, this.state.wed, this.state.thu, this.state.fri, this.state.sat, this.state.sun)
    });

    // if(nameArray.length > 0){
    //          this.setState({mon: this.props.cellNames});
    //      }


    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Chores</CustomTableCell>
                        <CustomTableCell>Monday</CustomTableCell>
                        <CustomTableCell>Tuesday</CustomTableCell>
                        <CustomTableCell>Wednesday</CustomTableCell>
                        <CustomTableCell>Thursday</CustomTableCell>
                        <CustomTableCell>Friday</CustomTableCell>
                        <CustomTableCell>Saturday</CustomTableCell>
                        <CustomTableCell>Sunday</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell>{row.chore}</CustomTableCell>
                                <CustomTableCell>{row.mon}</CustomTableCell>
                                <CustomTableCell>{row.tue}</CustomTableCell>
                                <CustomTableCell>{row.wed}</CustomTableCell>
                                <CustomTableCell>{row.thu}</CustomTableCell>
                                <CustomTableCell>{row.fri}</CustomTableCell>
                                <CustomTableCell>{row.sat}</CustomTableCell>
                                <CustomTableCell>{row.sun}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);