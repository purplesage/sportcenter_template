import React from 'react';
import Header from './Header';
import AdidasSVG from './AdidasSVG';
import RS21SVG from './RS21SVG';
import WilsonSVG from './WilsonSVG';
import ReebokSVG from './ReebokSVG';

const Hero = () => {
	return (
		<section className="relative h-96 w-full">
			<Header />
			<img
				className=" h-full w-full object-cover"
				src="/baseballkid1.webp"
				alt="baseball kid"
			/>

			<div className="absolute inset-x-4 top-1/3 flex flex-col items-center gap-3">
				<h1 className="text-center font-display2 text-5xl text-white">
					Tu tienda original
				</h1>
				<hr className="w-2/3 border-2 border-orange-500/70" />
				<div className="flex w-full items-center justify-center gap-5 px-5">
					<AdidasSVG tailwind={'fill-white w-12'} />
					<RS21SVG tailwind={'w-12'} />
					<WilsonSVG tailwind={'fill-red-600 w-12'} />
					<ReebokSVG tailwind={'fill-blue-700 w-12'} />
				</div>
				<div className="mt-12">
					<a
						href="#"
						className="rounded-full bg-orange-500 px-3 py-2 font-display tracking-wide text-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
					>
						Comprar
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
