import React from 'react';
import Header from './Header';
import AdidasSVG from './AdidasSVG';
import RS21SVG from './RS21SVG';

const Hero = () => {
	return (
		<div className="relative h-96 w-full">
			<Header />
			<img
				className=" h-full w-full object-cover"
				src="/baseballkid1.webp"
				alt="baseball kid"
			/>

			<h1 className="absolute inset-x-4 top-1/3 text-center font-display2 text-5xl text-white">
				Tu tienda original
			</h1>
			<div className="absolute bottom-1/4 flex w-full items-center border-2 border-red-600 px-5">
				<AdidasSVG tailwind={'fill-orange-500 w-16'} />
				<RS21SVG tailwind={'w-20'} />
			</div>
		</div>
	);
};

export default Hero;
