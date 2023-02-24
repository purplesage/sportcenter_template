import React from 'react';

const ProductCard = ({
	imageURL,
	alt,
	title,
	price,
	isDiscount,
	discountAmount,
}) => {
	return (
		<div className="relative rounded-lg drop-shadow-lg">
			{isDiscount && (
				<p className="absolute top-5 right-5 rounded bg-black px-2 py-1 text-white ">
					-{discountAmount}%
				</p>
			)}
			<img className="rounded-t-lg " src={imageURL} alt={alt} />
			<div className="flex flex-col items-center gap-2 rounded-b-lg bg-white p-3 ">
				<h3 className="font-display text-2xl text-black">{title}</h3>
				<hr className="w-1/3 border border-black/30" />
				<p>{price}$</p>
			</div>
		</div>
	);
};

export default ProductCard;
