import React, { Component } from 'react';

class Text extends Component {

   
    render(){
        const {
            arrayOfNumber,
            isActivated, 
            multiply, 
            number,
            objectWithInfo, 
            text,
            title
        } = this.props;
        
        const textSegunBool = isActivated ? 'On' : 'Off';
        const mappedNumbers = arrayOfNumber.map(multiply);

        return ( 
            <div>
            
                {title}

                <p>{text}</p>
                <p>{number}</p>
                <p>{textSegunBool}</p>
                <p>{mappedNumbers.join(', ') }</p>
                <p>{objectWithInfo.key}</p>
                
            </div>
         );
    } 
} export default Text;