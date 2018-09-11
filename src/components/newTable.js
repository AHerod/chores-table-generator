import React, {Component} from 'react';

export default class NewTable extends React.Component {

    render() {

        return <div>
            <table>
                <thead>
                <tr>
                    <td>chore</td>
                    <td>mon</td>
                    <td>tue</td>
                    <td>wed</td>
                    <td>thu</td>
                    <td>fri</td>
                    <td>sat</td>
                    <td>sun</td>
                </tr>
                </thead>
                <tbody>

                {this.props.cellChores.map(chore => {
                    return <tr>
                    <td>{chore.props.children}</td>
                    <td>coś</td>
                    <td>coś</td>
                    <td>coś</td>
                    <td>coś</td>
                    <td>coś</td>
                    <td>coś</td>
                    <td>coś</td>
                    </tr>
                })}
                </tbody>
            </table>
                </div>

    }
}
