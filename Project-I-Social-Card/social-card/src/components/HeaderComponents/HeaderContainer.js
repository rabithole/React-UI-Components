import React from 'react';
import './Header.css';

const Header = props => {
	return <header className='header'>
			<img src='https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png' alt='Lambda Logo'/>
			<p><strong>Lambda School</strong> @LambdaSchool - 26 jan</p>
		</header>;
}

export default Header;