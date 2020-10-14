import React from 'react';
import { Card, CardText } from 'material-ui/Card'
import {  redA400, lightBlueA400, amberA400 }  from  'material-ui/styles/colors';

export default class Benefit extends React.Component {
    render (){
        return (
            <ul>
    
            <Card className="Header-Benefit">
              
              <CardText>
                <div className="row">
                  <div className="Header-Benefit-image" style={{ "background-color" : redA400 }}>
                      <img src={process.env.PUBLIC_URL + '/images/heart.png'} alt='img'/>
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
                     <h3>¿Sin internet? Sin problemas</h3>
                     <p>Places funciona sin internet o en conexiones lentas</p>
                  </div>
                </div>

              </CardText>
            
            </Card>

           </ul>
        )
    }
}