import React from 'react';
import Header from './Header';
import AdidasSVG from './AdidasSVG';
import RS21SVG from './RS21SVG';
import WilsonSVG from './WilsonSVG';
import ReebokSVG from './ReebokSVG';
import { HiShoppingCart } from 'react-icons/hi';

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
				<h1 className="text-center font-display2 text-5xl tracking-wide text-white">
					Tu tienda original
				</h1>
				<div className="flex w-full items-center justify-center gap-5 px-5">
					<AdidasSVG tailwind={'fill-white w-12'} />
					<RS21SVG tailwind={'w-12'} />
					<WilsonSVG tailwind={'fill-red-600 w-12'} />
					<ReebokSVG tailwind={'fill-blue-700 w-12'} />
				</div>
				<div className="mt-12">
					<a
						href="#"
						className="flex items-center gap-2 rounded-full border-2 border-orange-500 bg-orange-500/40 px-3 py-2 font-display text-sm font-bold tracking-wider text-orange-50 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
					>
						<span>
							<HiShoppingCart className="h-5 w-5" />
						</span>
						Comprar
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
