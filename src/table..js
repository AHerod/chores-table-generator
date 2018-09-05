import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
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

const rows = [
    createData('chore1', 159, 6.0, 24, 4.0,2,8,9),
    createData('chore2', 237, 9.0, 37, 4.32,2,2),
    createData('chore3', 262, 16.0, 24, 6.0),
    createData('chore4', 305, 3.7, 67, 4.3),
    createData('chore5', 356, 16.0, 49, 3.9),
    createData('chore6', 356, 16.0, 49, 3.9),
    createData('chore7', 356, 16.0, 49, 3.9),

];


function CustomizedTable(props) {
    const { classes } = props;

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

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);