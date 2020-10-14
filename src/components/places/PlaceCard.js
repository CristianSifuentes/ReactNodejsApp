import React from 'react';
import { Card, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import { CSSTransition } from 'react-transition-group';

export default class PaceCard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            show: true
        }

        setInterval(() => this.setState({ show:!this.state.show }), 1000);
    }
    
    render (){
        return (
                <CSSTransition 
                    appear={true}
                    unmountOnExit={true}
                    mountOnEnter={true}
                    classNames="alert"
                    in={this.state.show}


                >
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
                </CSSTransition>

        )
    }
}