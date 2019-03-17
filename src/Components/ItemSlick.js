import React, { Component } from 'react';
import DataImg from './Data.json';

class ItemSlick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: DataImg
        }
    }
    
    // Keo
    drag = (e) => {
        e.dataTransfer.setData("text", e.target.id);
        console.log(e.target.id)
        console.log('DONE Throw')
    }

    drop = (e) => {
        e.preventDefault()
        var data = e.dataTransfer.getData('text')
        e.target.append(document.getElementById(data))
        console.log(e.target)
        console.log('okie')
    }

    allowDrop = (e) => {
        e.preventDefault()
    }
   
    
    isHandleDelete = () => {
        let a = this.props.index;
        console.log('s', a)
        // this.state.data.filter(item => {
        //     return item.id !== id
        // })
        // this.setState({
        //     item: this.state.data
        // });
        console.log(this.state.data[a])
        // setState dung sao
            this.setState({
                data: {}
            });
            let b = this.state.data[a].linkImg
            b = ''

        
    }
    render() {
        return (
             <div onClick={this.isHandleDelete} className='item'  onDragOver = { this.allowDrop.bind(this) } onDrop = { this.drop.bind(this)} draggable = 'true' onDragStart = {this.drag.bind(this)} id = 'drag1'>
                <img src={this.props.linkImg} alt='imageSlide' />
            </div>
        );
    }
}
export default ItemSlick;