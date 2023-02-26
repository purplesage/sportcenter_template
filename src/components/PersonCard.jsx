import React from 'react';

const PersonCard = ({ title, imageURL, alt }) => {
	return (
		<div className="relative">
			<div className="absolute top-1/2 left-5 z-10 flex items-center gap-8 font-display text-4xl tracking-wide text-orange-500 [text-shadow:_1px_3px_0_rgb(0_0_0_/_55%)]">
				<h3 className="underline">{title}</h3>
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
