import React from 'react';
import { FaCopyright } from 'react-icons/fa/index';

const Footer = () => {
	return (
		<footer className="mt-3 flex items-center justify-center gap-1 bg-orange-500 p-5 font-display text-white">
			<h3>Sportcenter ACIO</h3>
			<FaCopyright />
			<p>2023</p>
		</footer>
	);
};

export default Footer;
