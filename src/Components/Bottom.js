import React, { Component } from 'react';

class Bottom extends Component {
    render() {
        return (
            <div className='bottom'>
                <div className='p-bottom d-flex justify-content-center '>
                    <a href='/' className='camera d-flex justify-content-between mr-67'>
                        <h3>
                            camera <br/>
                            on
                        </h3>
                        <div className='img'>
                            <img src='image/ic-cameraon.svg' alt='cameraon'/>
                        </div>
                    </a>

                    <a href='/' className='camera d-flex justify-content-between mr-67 red'>
                        <h3>
                            camera <br/>
                            off
                        </h3>
                        <div className='img'>
                            <img src='image/ic-cameraoff.svg' alt='cameraoff'/>
                        </div>
                    </a>

                    <a href='/' className='camera d-flex justify-content-between mr-67 blue'>
                        <h3>
                            clear <br/>
                            camera
                        </h3>
                        <div className='img'>
                            <img src='image/ic-clearcamera.svg' alt='clearcamera'/>
                        </div>
                    </a>

                    <a href='/' className='camera d-flex justify-content-between mr-67 yellow'>
                        <h3>
                            reset <br/>
                            card
                        </h3>
                        <div className='img'>
                            <img src='image/ic-resetcard.svg' alt='reset'/>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Bottom;