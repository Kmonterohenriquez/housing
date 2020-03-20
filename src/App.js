import React from 'react';
import './App.sass';
import Nav from './Components/Nav/Nav';
import Features from './Components/Features/Features';
import NewLiving from './Components/NewLiving/NewLiving';
import Quote from './Components/Quote/Quote';

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className='App-container'>
				<Features />
				<NewLiving />
				<Quote />
			</div>
		</div>
	);
}

export default App;
