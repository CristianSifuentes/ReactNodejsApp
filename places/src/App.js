import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import { hola } from './components/Title';

function App() {
  return (
    <section>
      <div>
        <div>
          <Title></Title>
          <button>Crear cuenta gratuita</button>
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

export default App;
