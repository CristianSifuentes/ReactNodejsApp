import React from 'react';
import { Card, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

export default class PaceCard extends React.Component {
    render (){
        return (
                <div className="col-xs-12 col-sm-4" key={this.props.index}>
                <Card>
                    <CardMedia>
                        <img src={process.env.PUBLIC_URL + this.props.places.imagenUrl} alt={this.props.index}/>
                    </CardMedia>
                    <CardTitle title={this.props.places.title}>

                    </CardTitle>
                    <CardText>{this.props.places.descripcion}</CardText>
                    <CardActions style={{'textAlign': 'right'}}>
                        <FlatButton secondary={true} label="Ver mas">
                        </FlatButton>
                        <FlatButton secondary={true} label="Ocultar" onClick={
                            ()=> this.props.onRemove(this.props.places )
                        }>
                       </FlatButton>
                    </CardActions>
                    </Card>
                    </div>
        )
    }
}