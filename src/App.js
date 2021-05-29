import './index.css';
import React, { Component } from 'react';
import NavBar from './components/navbar';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<main className='container'>
					<NavBar />
				</main>
			</React.Fragment>
		);
	}
}
export default App;
