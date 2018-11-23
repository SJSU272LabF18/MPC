import React, { Component } from 'react';

import './App.css';
import Main from './component/Main'
import {BrowserRouter} from 'react-router-dom';
import Home from './component/Home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
