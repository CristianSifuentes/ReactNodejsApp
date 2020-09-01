import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import { hola } from './components/Title';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      numero: 0
    };

    // 
    
    this.updateNumero = this.updateNumero.bind(this);

  }

  updateNumero() {
    this.setState({
      numero: this.state.numero + 1
    });

  }


  render() {
  return (
    <section>
      <div>
        <div>
          <Title></Title>
          <h2>{this.state.numero}</h2>
          <button onClick={ this.updateNumero }>Crear cuenta gratuita</button>
          <img src={process.env.PUBLIC_URL + '/images/top-background.jpg'} height="300"/>
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
    </section>
  );
  }
}

export default App;
