import React, { Component } from 'react';
import ItemSlick from './ItemSlick';
import ItemSlickNum from './ItemSlickNum';
import DataImg from './Data.json';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: DataImg 
        }
    }

    onWheelHandler(event){
        console.log(event.currentTarget.children[0])
        console.log(event.currentTarget.scrollLeft)
        console.log('X', event.deltaX)
        console.log('Y', event.deltaY)
        if(event.deltaY > 0) {
            event.currentTarget.scrollLeft += 30
        }
        else{
            event.currentTarget.scrollLeft -= 30
        }
    }

    render() {
        return (    
            <main>
                <div className='slick-slider'>                        
                    <div className='wrap_item' onWheel={this.onWheelHandler}>
                    {/* {this.isHandleDelete()} */}
                        <ItemSlickNum/>
                        {
                            this.state.data.map((item, index) => {
                            return (
                                <ItemSlick linkImg={item.linkImg} key = { index } index = {item.id} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='icon-drag text-center'>
                    <img src='image/ic-drag.svg' alt='icon-drag'/>  
                    <p>Kéo hình ra khỏI hàng chạy để xoá</p>
                </div>
            </main>
        );
    }
}
export default Main;