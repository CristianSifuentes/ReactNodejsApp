import React from 'react';
import Container from '../components/Container';
import PlaceHorizontal from '../components/places/PlaceHorizontal';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton'
import data from '../request/places';
import { Link } from 'react-router-dom'; 
import { FloatingActionButton } from 'material-ui';

export default class Dashboard extends React.Component{
    
    constructor(props){
        super(props);
           
        this.state = {
          places: data.places
        }
    
      }
    
    
    
    places(){
        return this.state.places.map((place, index) => {
              return  <PlaceHorizontal place={place}></PlaceHorizontal>
        });
    }
     
    
    render(){
        return(
            <div>
                <Link to='/new'>
                    <FloatingActionButton 
                    secondary={true} 
                    className="FAV"
                    >
                      <ContentAdd></ContentAdd>

                    </FloatingActionButton>
                </Link>
                <Container>
                    <div className="row"> 
                        <div className="col-xs-12 col-md-2" style={{ 'textAlign': 'left' }}>
                             <FlatButton label="Explorar"></FlatButton>
                             <FlatButton label="Favoritos"></FlatButton>
                             <FlatButton label="Visitas previas"></FlatButton>

                        </div>
                        <div className="col-xs-12 col-md-10">
                                {this.places()}
                        </div>                   
                    </div>
                </Container>
            </div>
        );
    }

}