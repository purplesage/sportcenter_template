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
		<div className="relative h-full rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.3)]">
			{isDiscount && (
				<p className="absolute top-3 right-3 rounded bg-red-600 px-2 py-1 font-body text-xs font-semibold text-white ">
					-{discountAmount}%
				</p>
			)}
			<img
				className="aspect-square w-full rounded-t-lg "
				src={imageURL}
				alt={alt}
			/>
			<div className="flex flex-col items-center gap-5 rounded-b-lg bg-white p-3 ">
				<h3 className="text-center font-display text-base text-black">
					{title}
				</h3>
				<hr className="w-1/3 border border-black/10" />
				{isDiscount ? (
					<p className="flex gap-5 font-body ">
						<span className=" text-black/30 line-through">${price}</span> $
						{price - (discountAmount * price) / 100}
					</p>
				) : (
					<p className="font-body">${price}</p>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
