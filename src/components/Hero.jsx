import React from 'react';
import AdidasSVG from './AdidasSVG';
import RS21SVG from './RS21SVG';
import WilsonSVG from './WilsonSVG';
import ReebokSVG from './ReebokSVG';
import { HiShoppingCart } from 'react-icons/hi/index';
import Header from './Header';

const Hero = () => {
	return (
		<section className="h-96 w-full bg-[url('/baseballkid1.webp')] bg-cover bg-center">
			<Header />

			<div className="z-20 mt-12 flex flex-col items-center">
				<h1 className="mb-3 text-center font-display2 tracking-wide text-white/70">
					<span className="text-2xl">Tu tienda </span>
					<br />
					<span className=" text-6xl text-white [text-shadow:_0_4px_0_rgb(0_0_0_/_55%)]">
						Original
					</span>
				</h1>
				<div className="flex w-full items-center justify-center gap-5 px-5">
					<AdidasSVG tailwind={'fill-white w-12'} />
					<RS21SVG tailwind={'w-12'} />
					<WilsonSVG tailwind={'fill-red-600 w-12'} />
					<ReebokSVG tailwind={'fill-blue-700 w-12'} />
				</div>
				<div className="mt-8">
					<a
						href="#tienda"
						className="flex items-center gap-2 rounded-full border-2 border-orange-500 bg-orange-500/60 px-3 py-2 font-display text-sm font-bold tracking-wider text-orange-50 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
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

// const Hero = () => {
// 	return (
// 		<section className="relative h-96 w-full">
// 			<img
// 				className=" h-full w-full object-cover"
// 				src="/baseballkid1.webp"
// 				alt="baseball kid"
// 			/>

// 			<div className="absolute inset-x-4 top-1/3 flex flex-col items-center">
// 				<h1 className="mb-3 text-center font-display2 tracking-wide text-white/70">
// 					<span className="text-2xl">Tu tienda </span>
// 					<br />
// 					<span className=" text-6xl text-white [text-shadow:_0_4px_0_rgb(0_0_0_/_55%)]">
// 						Original
// 					</span>
// 				</h1>
// 				<div className="flex w-full items-center justify-center gap-5 px-5">
// 					<AdidasSVG tailwind={'fill-white w-12'} />
// 					<RS21SVG tailwind={'w-12'} />
// 					<WilsonSVG tailwind={'fill-red-600 w-12'} />
// 					<ReebokSVG tailwind={'fill-blue-700 w-12'} />
// 				</div>
// 				<div className="mt-8">
// 					<a
// 						href="#"
// 						className="flex items-center gap-2 rounded-full border-2 border-orange-500 bg-orange-500/40 px-3 py-2 font-display text-sm font-bold tracking-wider text-orange-50 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
// 					>
// 						<span>
// 							<HiShoppingCart className="h-5 w-5" />
// 						</span>
// 						Comprar
// 					</a>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };
