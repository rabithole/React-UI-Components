import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
// import ClickEvent from './ClickEvent';

function clickEvent(){
	window.location.href = 'https://www.reactjs.org';
}

const Container = props => {
	return <main className='main' onClick={clickEvent}>
				<CardBanner />
				<CardContent />
			</main>;
};

export default Container;