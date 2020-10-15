import React, { Component } from 'react';
import MyAppBar from './components/navigation/MyAppBar';
import './App.css';
import { withRouter } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TransitionGroup } from 'react-transition-group';
import CSSTransition from 'react-transition-group/CSSTransition'




class App extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
  return (
    <MuiThemeProvider>
      <MyAppBar></MyAppBar>
      <TransitionGroup>
        <CSSTransition classNames="left-out" timeout={300} key={this.props.location.pathname.split('/')[0]}>
          {
        this.props.children
      }
        </CSSTransition>
      </TransitionGroup>

    </MuiThemeProvider>
   );
  }
}

export default withRouter(App);
