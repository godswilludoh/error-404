import React from 'react';
import '../styles/Home.css';
import Person from '../../assets/person.svg';

const Home = () => {
	return (
		<div className='header-container'>
			<div
				className='home'
				style={{
					backgroundImage: `url(${Person})`,
				}}
			>
				<div className='text'>
					<h1>404</h1>
					<p>Oops! Page not found</p>
					<button>Go Back Home</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
