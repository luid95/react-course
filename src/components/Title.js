import React, { Component, Fragment } from 'react';

class Title extends Component {

    render(){
        return(
            <Fragment>
                <h1> {this.props.text} </h1>
            </Fragment>
        );
    }

}export default Title;