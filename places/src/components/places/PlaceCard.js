import React from 'react';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card'

export default class PaceCard extends React.Component {
    render (){
        return (
                <div className="col-xs-12 col-sm-4" key={this.props.index}>
                <Card>
                    <CardMedia>
                        <img src={process.env.PUBLIC_URL + this.props.places.imagenUrl}/>
                    </CardMedia>
                    <CardTitle title={this.props.places.title}>

                    </CardTitle>
                    <CardText>{this.props.places.descripcion}</CardText>
                    </Card>
                    </div>
        )
    }
}