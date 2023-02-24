import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const PersonCard = ({ title, imageURL, alt }) => {
	return (
		<div className="relative">
			<div className="absolute top-1/2 left-5 z-10 flex items-center gap-8 font-display text-5xl text-orange-500 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
				<h3>{title}</h3>
				<span className="rounded-full bg-white/50 align-middle ">
					<GoArrowRight className="h-10 w-10" />
				</span>
			</div>
			<img
				className=" h-full w-full rounded-lg object-cover "
				src={imageURL}
				alt={alt}
			/>
		</div>
	);
};

export default PersonCard;
