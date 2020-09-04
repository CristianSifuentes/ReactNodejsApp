import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card'
import { indigo400, redA400, lightBlueA400, amberA400 }  from  'material-ui/styles/colors';
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
            <img className="Header-ilustration"  src={process.env.PUBLIC_URL + '/images/top-background.png'} height="300"/>
          </div> 
          <div>

          <ul>

<Card className="Header-Benefit">
  
  <CardText>
    <div className="row">
      <div className="Header-Benefit-image" style={{ "background-color" : redA400 }}>
          <img src={process.env.PUBLIC_URL + '/images/heart.png'}/>
      </div>
      <div className="Header-Benefit-content">
          <h3>Calificaciones con emiciones</h3>
          <p>Califica tus lugares con experiencias, no con números</p>
      </div>
    </div>

  </CardText>
</Card>


<Card className="Header-Benefit">
  
  <CardText>
    <div className="row">
      <div className="Header-Benefit-image" style={{ "background-color" : lightBlueA400 }}>
          <img src={process.env.PUBLIC_URL + '/images/heart.png'}/>
      </div>
      <div className="Header-Benefit-content">
         <h3>¿Sin internet? Sin problemas</h3>
         <p>Places funciona sin internet o en conexiones lentas</p>
      </div>
    </div>

  </CardText>
</Card>


<Card className="Header-Benefit">
  
  <CardText>
    <div className="row">
      <div className="Header-Benefit-image" style={{ "background-color" : amberA400 }}>
          <img src={process.env.PUBLIC_URL + '/images/heart.png'}/>
      </div>
      <div className="Header-Benefit-content">
         <h3>Yus lugares favoritos</h3>
       <p>Define tus sitios de lugares favoritos</p>
      </div>
    </div>

  </CardText>
</Card>

</ul>
            
          </div>        
        </div>
      </div>
      <div  style={{ "background-color": indigo400, "padding": "50px"  }}>
             
      </div>

    </MuiThemeProvider>
  );
  }
}

export default App;
