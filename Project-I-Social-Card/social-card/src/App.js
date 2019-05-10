import React from 'react';
import './App.css';
import Container from './components/CardComponents/CardContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className='mainDiv'>
      	<HeaderContainer />
      	<Container />
    	<Footer />
    </div>
  );
};

export default App;
