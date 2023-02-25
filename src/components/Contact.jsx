import React from 'react';
import Telephone from '/telephone.webp';

const Contact = () => {
	return (
		<section className="mt-10">
			<header className="relative my-5 flex justify-center">
				<h2 className="absolute top-[6rem] z-10 font-display2 text-6xl text-orange-500 [text-shadow:_0_5px_0_rgb(0_0_0_/_55%)]">
					Contacto
				</h2>
				<img
					className="aspect-square w-3/4 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.45)] contrast-75"
					src={Telephone}
					alt="closet"
				/>
			</header>
			<div>
				<h3>Somos tienda física</h3>
				<p>Estamos ubicados en el C.C. Los Proceres, Caracas</p>
				<p>También puedes escribirnos al Whatsapp +58 424 133 51 35</p>
			</div>
		</section>
	);
};

export default Contact;
