import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className='d-flex'>
                <div className="h-left justify-content-center d-flex">
                    <img src="image/logo-vinpearl.svg" alt="logo-vinpearl"/>
                </div>
                <h3 className='justify-content-center align-self-center d-flex'>VINPEARL CONTROL ACCESS</h3>
                <a href='/' className='h-right d-flex justify-content-between'>
                    <img src='image/ic-logout.svg' alt='h-right'/>
                    <p>log out</p>
                </a>
            </header>
        );
    }
}

export default Header;