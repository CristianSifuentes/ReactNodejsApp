import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { indigo400 }  from  'material-ui/styles/colors';
import Title from '../components/Title';
import Container from '../components/Container';
import data from '../request/places';
import Benefit from '../components/Benefit';
import PlaceCard from '../components/places/PlaceCard'
export default class Home extends React.Component {
    
  constructor(props){
    super(props);
       
    this.state = {
      places: data.places
    }

    this.hidePlace = this.hidePlace.bind(this);
  }

  hidePlace(place){
    this.setState({
      places: this.state.places.filter(el => el != place)
    })
  }
    
   places() {
     return data.places.map((places, index) => {
       return (
        <PlaceCard onRemove={this.hidePlace} places={places} index={index}></PlaceCard>
       )
     }) 
   }
    
    
    render() {
        return (
            <section>
            <div className="Header-background"> 
            
            <Container>
              <div className="Header-main">
                 <Title></Title>
                 <RaisedButton label="Crear cuenta gratuita" secondary={true}></RaisedButton>
                 <img className="Header-ilustration"  src={process.env.PUBLIC_URL + '/images/top-background.png'} height="300"/>
              </div> 
              <div>
                  <Benefit></Benefit>
              </div>  
            </Container>

            {/* <div style={{ "width": "80%", "margin": "o auto" }}>
             
      
            </div> */}
          </div>
             <div  style={{ "background-color": indigo400, "padding": "50px", "color":"white"  }}>
                 <h3 style={{ 'fontSize':'24px' }}>Sitios populares</h3>
                 <div className="row">
                    {this.places()}
                 </div>
          </div>
          </section>

        )
    }
}