import React from 'react';
import Telephone from '/telephone.webp';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi/index';
import { TbTruckDelivery } from 'react-icons/tb';

const Contact = () => {
	return (
		<section className="p-5">
			<header className="relative my-5 flex justify-center">
				<h2 className="absolute top-[4rem] z-10 font-display2 text-6xl text-orange-500 [text-shadow:_0_5px_0_rgb(0_0_0_/_55%)]">
					Contacto
				</h2>
				<img
					className="aspect-square w-3/4 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.45)] contrast-75"
					src={Telephone}
					alt="closet"
				/>
			</header>
			<div className="mt-10 flex flex-col gap-3">
				<h3 className="font-display text-lg font-semibold tracking-wider text-black/80 ">
					Somos tienda física
				</h3>
				<p className="flex items-center gap-2 font-body text-sm">
					<span>
						<HiLocationMarker className="h-5 w-5 text-orange-500" />
					</span>
					Estamos ubicados en el C.C. Los Proceres, Caracas, Venezuela.
				</p>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7846.671525319769!2d-66.89536937486376!3d10.474175259811998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58b659a2242d%3A0xa16045408caf76f9!2sC.%20C.%20Los%20Pr%C3%B3ceres!5e0!3m2!1ses!2sve!4v1677368290210!5m2!1ses!2sve"
					width="300"
					height="280"
					allowfullscreen=""
					loading="lazy"
					className="mx-auto border-0"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
				<p className="flex items-center gap-2 font-body text-sm text-black/80">
					<span>
						<BsFillTelephoneFill className="h-5 w-5 text-orange-500" />
					</span>
					Whatsapp +58 424 133 51 35
				</p>
				<p className="flex items-center gap-2 font-body text-sm font-semibold text-black/80">
					<span>
						<TbTruckDelivery className="h-6 w-6 text-orange-500" />
					</span>
					Realizamos envíos a todo el país.
				</p>
			</div>
		</section>
	);
};

export default Contact;
