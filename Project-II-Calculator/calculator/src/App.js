import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='mainDiv'>
      <CalculatorDisplay />
      <NumberButton buttonStyle='NumberButton longButton' text='clear'/>
      <NumberButton buttonStyle='NumberButton actionButton' text='/'/>
      <NumberButton buttonStyle='NumberButton' text='7'/>
      <NumberButton buttonStyle='NumberButton' text='8'/>
      <NumberButton buttonStyle='NumberButton' text='9'/>
      <NumberButton buttonStyle='NumberButton actionButton' text='X'/>
      <NumberButton buttonStyle='NumberButton' text='4'/>
      <NumberButton buttonStyle='NumberButton' text='5'/>
      <NumberButton buttonStyle='NumberButton' text='6'/>
      <NumberButton buttonStyle='NumberButton actionButton' text='-'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='2'/>
      <NumberButton buttonStyle='NumberButton' text='3'/>
      <NumberButton buttonStyle='NumberButton actionButton' text='+'/>
      <NumberButton buttonStyle='NumberButton longButton' text='0'/>
      <NumberButton buttonStyle='NumberButton actionButton' text='='/>
    </div>
  );
};

export default App;
