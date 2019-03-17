import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
}

class Target extends Component {
    render() {
        const {connectDropTarget, hovered, item} = this.props
        return (
            <div className='Target'>
                
            </div>
        );
    }
}

export default DropTarget(types, spec, collect)(Target);
