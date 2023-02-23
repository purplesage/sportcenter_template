import React from 'react';
import Header from './Header';

const Hero = () => {
	return (
		<div className="relative h-96">
			<Header />
			<img
				className=" h-full w-full object-cover"
				src="/baseballkid1.webp"
				alt="baseball kid"
			/>

			<h1 className="absolute inset-x-4 top-1/3 text-center font-display2 text-5xl text-white">
				Tu tienda original
			</h1>
		</div>
	);
};

export default Hero;
