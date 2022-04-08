import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import './styles/Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='left'>
				<Link to='/'>
					<img src={Logo} alt='logo' />
				</Link>
			</div>
			<div className='right'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/settings'>Settings</Link>
			</div>
		</div>
	);
};

export default Navbar;
