import React, { Component, Fragment } from 'react';

class Forms extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.inputName.value;
        const email = document.getElementById('instagram').value;

        console.log({ name, email });
        
    }

    handleChange = (e) => {
        console.log('HandleChange');
        console.log(e.target.checked);
    }
    
    render(){
        return(
            <Fragment>
                <h1>Formulario</h1>

                <form onSubmit={this.handleSubmit} >
                    <p>

                        <label htmlFor='name'>Nombre:</label>
                        <input
                        id='name'
                        name='userName'
                        placeholder='Introduce el nombre'
                        ref={inputElement => this.inputName = inputElement} 
                        />
                    </p>

                    <p>
                        <label htmlFor='instagram'>Intagram:</label>
                        <input
                        id='instagram'
                        name='instaAccount'
                        placeholder='Introduce tu Instagram' 
                        />
                    </p>

                    <p>
                        <label>
                        <input
                        onChange={this.handleChange}
                        type='checkbox'
                         />
                            Accepted terms
                        </label>
                    </p>

                    <button >Enviar</button>
                </form>
            </Fragment>
        );
    }
}
 
export default Forms;