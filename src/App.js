import React from 'react';
import './App.sass';

// Components //
import Nav from './Components/Nav/Nav';
import Features from './Components/Features/Features';
import NewLiving from './Components/NewLiving/NewLiving';
import Quote from './Components/Quote/Quote';
import Developing from './Components/Developing/Developing'
import Pricing from './Components/Pricing/Pricing'
import Location from './Components/Location/Location'

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className='App-container'>
				<Features />
				<NewLiving />
				<Quote />
				<Developing />
				<Pricing />
				<Location/>
			</div>
		</div>
	);
}

export default App;
