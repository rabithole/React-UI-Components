import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from'./CardContent';

const Container = props => {
	return <main className='main'>
				<CardBanner />
				<CardContent />
			</main>;
};

export default Container;