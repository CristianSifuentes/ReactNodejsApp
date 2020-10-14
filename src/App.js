import React, { Component } from 'react';
import MyAppBar from './components/navigation/MyAppBar';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




class App extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
  return (
    <MuiThemeProvider>
      <MyAppBar></MyAppBar>
     {
      this.props.children
     }
    </MuiThemeProvider>
   );
  }
}

export default App;
