import React, {Component} from 'react';
import { DropTarget } from 'react-dnd';


function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        item: monitor.getItem(),

    }
}


class DropCells extends Component {
    state = {
        tdValue: ""
    };
    render() {
        const { connectDropTarget, isOver, item} = this.props;
        const backgroundColor = isOver ? 'lightgreen' : 'white';
        const dropped = isOver? this.props.item : 'no';
        return connectDropTarget(
            <td className="target" style={{ background: backgroundColor }}>
                 {dropped}
            </td>
        );
    }
}

class Element extends Component{
    state = {
        value: this.props.newValue
    };
    render(){
        return <span> {this.state.value}</span>
    }
}
export default DropTarget('item', {}, collect)(DropCells);
