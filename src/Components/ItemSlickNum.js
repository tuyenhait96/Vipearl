import React, { Component } from 'react';

class ItemSlickNum extends Component {
    drop = (e) => {
        e.preventDefault()
        var data = e.dataTransfer.getData('text')
        e.target.appendChild(document.getElementById(data))
        console.log('okie' + e.target)
        console.log('okie')
    }

    allowDrop = (e) => {
        e.preventDefault()
    }
drag = (e) => {
          e.dataTransfer.setData("text", e.target.id);
        console.log(e.target.id)
        console.log('DONE Throw')
    }
    render() {
        return (
            <div className='border-frame' onDragOver = { this.allowDrop.bind(this) } onDrop = { this.drop.bind(this)}  >
            <div draggable = 'true' onDragStart = {this.drag.bind(this)} id = 'drag2'>
                <h1>02</h1>
                <h3>PAX</h3>
                </div>
            </div>
        );
    }
}

export default ItemSlickNum;