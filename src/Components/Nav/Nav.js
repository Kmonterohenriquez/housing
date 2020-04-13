import React from 'react';
import './Nav.sass';
import logo from '../../img/logo.png'

const Nav = () => {
	return (
		<header className='Nav'>
			<div className='Nav-container space'>

				<h1 className='logo'>
					<img src={logo} alt="Oberlo logo"/>
					Oberlo</h1>
				<div className='left-side'>
					<nav>
						<ul>
							<li>Home</li>
							<li>Features</li>
							<li>Developing</li>
							<li>Pricing</li>
							<li>Gallery</li>
							<li>Location</li>
							<li>Contact</li>
						</ul>
					</nav>
					<p className='tel'><span></span>+1 (407) 777-0000</p>
				</div>
				<i className="menu-icon fas fa-bars"></i>
			</div>
		</header>
	);
};

export default Nav;
