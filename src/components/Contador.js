import React, { Component, Fragment } from 'react';

class Contador extends Component{

    //estado
    //1.- es inmutable
    //2.- solo se puede modificar mediante el setState
    //3.- se ejecuta de manera asincrona
    constructor () {
        super();
        this.state ={
            contador: 1,
            band: true,
        }

        setInterval( () => {
        
            this.setState({contador: this.state.contador + 1})
        }, 1000) 
    }

    render(){

        return(

            <Fragment>
                <h2>Contador --> Estados React js</h2>
                <span>Contador: {this.state.contador} </span>
            </Fragment>
        );
    }
} export default Contador;