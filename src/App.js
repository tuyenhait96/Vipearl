import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Bottom from './Components/Bottom';

class App extends Component {
  render() {
    return (
      <div className='container-vinpreal'>
        <Header/>  
        <Main/>
        <Bottom/>
      </div>
    );
  }
}

export default App;
