import React, {Component} from 'react';
import DropCells from "./dropCells";
export default class NewTable extends React.Component {

    render() {

        return <div>
            <table>
                <thead>
                <tr>
                    <td>CHORES</td>
                    <td>MONDAY</td>
                    <td>TUESDAY</td>
                    <td>WEDNESDAY</td>
                    <td>THURSDAY</td>
                    <td>FRIDAY</td>
                    <td>SATURDAY</td>
                    <td>SUNDAY</td>
                </tr>
                </thead>
                <tbody>

                {this.props.cellChores.map(chore => {
                    return <tr>
                    <td>{chore.props.children}</td>
                    <DropCells item = {this.props.cellNames}/>
                    <DropCells item = {this.props.cellNames}/>
                    <DropCells item = {this.props.cellNames}/>
                    <DropCells item = {this.props.cellNames}/>
                    <DropCells item = {this.props.cellNames}/>
                    <DropCells item = {this.props.cellNames}/>
                    <DropCells item = {this.props.cellNames}/>

                    </tr>
                })}
                </tbody>
            </table>
                </div>

    }
}
