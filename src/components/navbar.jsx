import React, { Component } from 'react';

class NavBar extends Component {
	state = {};

	handleClick = () => {
		console.log('clicked');
	};
	render() {
		return (
			<div>
				<nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-primary'>
					<div className='container-fluid p-2 ps-4'>
						<a href='' className='navbar-brand'>
							Nuriddin Islamov
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNav'
							aria-controls='navbarNav'
							aria-expanded='false'
							aria-label='Toggle navigation'
							onClick={this.handleClick}>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div
							className='collapse navbar-collapse'
							id='navbarNav'>
							<ul className='navbar-nav'>
								<li className='nav-item'>
									<a
										className='nav-link'
										aria-current='page'
										href='#'>
										About
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										Projects
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										Contact me
									</a>
								</li>
							</ul>
							<div />
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;
