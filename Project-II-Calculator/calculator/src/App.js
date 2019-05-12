import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='mainDiv'>
      <CalculatorDisplay />
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
      <NumberButton buttonStyle='NumberButton' text='1'/>
    </div>
  );
};

export default App;
