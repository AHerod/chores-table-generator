import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
    beginDrag(props) {
        console.log('dragging');
        return props.item;
    }

};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class DragNames extends Component {
    render() {
        const { isDragging, connectDragSource, item } = this.props;
        const opacity = isDragging ? 0 : 1;

        return connectDragSource(
            <div className="namesList" style={{ opacity }}>
                <span>{item}</span>
            </div>
        );
    }
}

export default DragSource('item', itemSource, collect)(DragNames);