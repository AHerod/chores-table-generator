import React, {Component} from 'react';
import { DropTarget } from 'react-dnd';


function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
}

class Target extends Component {
    state = {
        tdValue: ""
    };
    render() {
        const { connectDropTarget, hovered, item } = this.props;
        const backgroundColor = hovered ? 'lightgreen' : 'white';

        return connectDropTarget(
            <td className="target" style={{ background: backgroundColor }}>
                {this.state.tdValue}
            </td>
        );
    }
}

export default DropTarget('item', {}, collect)(Target);
