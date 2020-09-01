import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import { hola } from './components/Title';

class App extends Component {
  
  render() {
  return (
    <MuiThemeProvider>
      <div className="Header-background"> 
        <div style={{ "width": "80%", "margin": "o auto" }}>
          <Title></Title>
          <div className="Header-main">
            <RaisedButton label="Crear cuenta gratuita" secondary={true}></RaisedButton>
            <img className="Header-ilustration"  src={process.env.PUBLIC_URL + '/images/top-background.jpg'} height="300"/>
          </div>
          <div>
             <ul>
               <li>
                 <h3>Calificaciones con emiciones</h3>
                 <p>Califica tus lugares con experiencias, no con números</p>
               </li>
               <li>
                 <h3>¿Sin internet? Sin problemas</h3>
                 <p>Places funciona sin internet o en conexiones lentas</p>
               </li>
               <li>
                 <h3>Yus lugares favoritos</h3>
                 <p>Define tus sitios de lugares favoritos</p>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
  }
}

export default App;
