import React from 'react';
import './App.sass';

// Components //
import Nav from './Components/Nav/Nav';
import Features from './Components/Features/Features';
import NewLiving from './Components/NewLiving/NewLiving';
import Quote from './Components/Quote/Quote';
import Developing from './Components/Developing/Developing';
import Pricing from './Components/Pricing/Pricing';
import Location from './Components/Location/Location';
import Partners from './Components/Partners/Partners';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Showcase from './Components/Showcase/Showcase';

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className='App-container'>
				<Showcase />
				<Features />
				<NewLiving />
				<Quote />
				<Developing />
				<Pricing />
				<Location />
				<Partners />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;
