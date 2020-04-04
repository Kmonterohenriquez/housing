import React from 'react';
import './Location.sass';
import house from '../../img/gallery-01.jpg';
const Location = () => {
	return (
		<div className='Location'>
			<div className='container'>
				<h1 className='Location-title'>Location</h1>
				<p className='Location-description'> Where You'll Be Living</p>
				<div className='map-container'>
					<div className='map-description'>
						<div className='map-info'>
							<h1 className='map-info-title'>Greenfield residence</h1>
							<p className='map-info-address'>
								2519 Stanley Avenue Huntington, NY 11743
							</p>
							<p className='map-info-latitude'><strong>Latitude</strong> <div>51.5144281</div></p>
							<p className='map-info-longitude'><strong>Longitude</strong> <div>-0.12815562</div></p>
						</div>
						<img src={house} alt='luxury house' />
					</div>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.6591647455584!2d-111.89485428435052!3d40.438545462235815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d97574f96827d%3A0xf1e15119e2daaefd!2sDevMountain%20%7C%20Lehi!5e0!3m2!1sen!2sus!4v1575877836083!5m2!1sen!2sus'
						width='600'
						height='500'
						frameBorder='0'
						style={{ border: 0 }}
						allowFullScreen
						title='ourAdress'
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Location;
