import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




class App extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
  return (
    <MuiThemeProvider>
     {this.props.children}
    </MuiThemeProvider>
   );
  }
}

export default App;
