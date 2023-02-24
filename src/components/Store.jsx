import React from 'react';
import ProductCard from './ProductCard';
import SoccerBall from '/soccer_ball.webp';
import Shirt1 from '/shirt1.webp';

const Store = () => {
	return (
		<section className="bg-orange-500 p-8">
			<div>
				<ProductCard
					imageURL={Shirt1}
					alt="shirt"
					title="Camisa Adidas"
					price="35"
					isDiscount
					discountAmount="20"
				/>
				{/* <ProductCard imageURL={SoccerBall} alt="soccer ball" />
				<ProductCard imageURL={SoccerBall} alt="soccer ball" />
				<ProductCard imageURL={SoccerBall} alt="soccer ball" /> */}
			</div>
		</section>
	);
};

export default Store;
