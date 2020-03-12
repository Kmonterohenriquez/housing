import React from 'react';
import './Nav.sass';

const Nav = () => {
	return (
		<header className='Nav'>
			<div className='Nav-container lg-container'>
				<h1 className='logo'>Housing</h1>
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
			</div>
		</header>
	);
};

export default Nav;
