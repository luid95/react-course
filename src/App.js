import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Principal';
import Text from './components/Text';
import Title from './components/Title';
import Contador from './components/Contador';

import Events from './events/Events';
import Forms from './events/Forms';


Title.defaultProps ={
  text: 'Titulo por defecto'
}

function App() {
  
  return (
    <div className="App">
      {/* Props */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hello from props' />
        <Title text={'Otro titulo desde props'} />
      </header>
      <Text 
      arrayOfNumber={[2, 3, 10]}
      isActivated
      multiply={ (number) => number * 4}
      number={2} 
      objectWithInfo={{ key: 'value_1', key2: 'value_2' }}
      text='Texto en string'  
      title={ <h1>Este es el titulo</h1> }
      />
      {/* State */}

      <Contador />


      {/* Events */}

      <Events />
      <Forms />
    </div>
  );
}

export default App;
