import React, { useState, useEffect } from 'react';
import './Nav.css';

const Nav = () => {
	const [ show, handleShow ] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);
	return (
		<div className={`nav ${show && 'nav_black'}`}>
			<img
				className="nav_logo"
				src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
				alt="Netfix Logo"
			/>
			<img className="nav_avatar" src="https://pbs.twimg.com/media/CW2i0pJW4AEYFI3.png" alt="Netfix Logo" />
		</div>
	);
};

export default Nav;
