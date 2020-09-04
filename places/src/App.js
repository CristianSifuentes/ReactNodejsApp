import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './pages/Home'

class App extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
  return (
    <MuiThemeProvider>
      <section>
        <Home></Home>
      </section>
    </MuiThemeProvider>
  );
  }
}

export default App;
