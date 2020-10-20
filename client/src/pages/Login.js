import React from 'react';
import Title from '../components/Title';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

export default class Login extends React.Component{
    render(){
        return(
            <div className="row middle-xs">
               <div className="col-xs-12 col-sm-6">
                   <Container>
                       <div style={{ 'textAlign': 'left' }} > 
                        <Title></Title>
                        <TextField floatingLabelText="Correo electrónico" type="email" className="textfield"></TextField>
                        <TextField floatingLabelText="Constraeña" type="password" className="textfield"></TextField>
                            <div className="Login-actions">
                                <Link to="/signup" style={{  marginRight: "1em"  }}>Crear nueva cuenta</Link>
                                <RaisedButton label="Ingresar" secondary={true} ></RaisedButton>
                            </div>
                       </div>
                       
                   </Container>
               </div>

                <div className="col-xs-12 col-sm-6">
                    <div className="Login-background" 
                    style={{ 'backgroundImage': 
                    "url(" + process.env.PUBLIC_URL + "/images/top-background.png"+ ")" }}>

                    
                    </div>
                </div>
            </div>


        )
    }
}