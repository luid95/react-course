import React, { Component, Fragment } from 'react';

class Events extends Component {

    constructor () {
        super();
        this.state ={
            mousex: 0,
            mousey: 0,
        }
        //this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleClick (e) {
        console.log(e);
        console.log(e.nativeEvent);

        alert('Hi there!')
    }

    handleMouseMove = (e) => {
        const {clientX, clientY} = e;

        this.setState({
            mousex: clientX,
            mousey: clientY,
        })
        
    }

    render () {
        return ( 
            <Fragment>
                <h4>Eventos</h4>
                <button onClick={this.handleClick}> Hi, there!</button>

                <div
                    onMouseMove={this.handleMouseMove} 
                    style={{ border: '1px solid #000', marginTop: 10, padding: 10}}>
                    <p>{this.state.mousex} , {this.state.mousey}</p>
                </div>

            </Fragment>
         );
    }
    
}
 
export default Events;