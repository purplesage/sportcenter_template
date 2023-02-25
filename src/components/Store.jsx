import React from 'react';
import ProductCard from './ProductCard';
import ShopFilters from './ShopFilters';
import Shoes1 from '/shoes1.webp';
import Shoes2 from '/shoes2.webp';
import Shoes3 from '/shoes3.webp';
import Shirt1 from '/shirt1.webp';
import Shirt2 from '/shirt2.webp';
import Shirt3 from '/shirt3.webp';
import SoccerBall from '/soccer_ball.webp';
import BaseballGlove from '/baseball_glove.webp';
import Closet from '/closet.webp';

const Store = () => {
	return (
		<section className=" h-fit bg-orange-500 p-3">
			<header className="relative my-5 flex justify-center">
				<h2 className="absolute top-[6rem] z-10 font-display2 text-6xl text-orange-600 [text-shadow:_0_4px_0_rgb(0_0_0_/_50%)]">
					Tienda
				</h2>
				<img
					className="aspect-square w-3/4 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] contrast-75"
					src={Closet}
					alt="closet"
				/>
			</header>
			<div className="mb-5">
				<h3 className="mb-3 font-display tracking-wider text-white">Filtrar</h3>
				<ShopFilters />
			</div>
			<div className="grid grid-cols-2 gap-2">
				<ProductCard
					imageURL={Shirt1}
					alt="shirt"
					title="Plain T-Shirt"
					price={35}
				/>
				<ProductCard
					imageURL={Shoes1}
					alt="shoes"
					title="Adidas X-FORCE"
					price={60}
					isDiscount
					discountAmount={15}
				/>

				<ProductCard
					imageURL={Shoes2}
					alt="shoes"
					title="Adidas Firefly"
					price={50}
					isDiscount
					discountAmount={10}
				/>
				<ProductCard
					imageURL={Shoes3}
					alt="shoes"
					title="Adidas Eagle"
					price={40}
					isDiscount
					discountAmount={25}
				/>

				<ProductCard
					imageURL={Shirt2}
					alt="shoes"
					title="Adidas T-shirt"
					price={40}
				/>
				<ProductCard
					imageURL={Shirt3}
					alt="shoes"
					title="Simple T-shirt"
					price={20}
					isDiscount
					discountAmount={20}
				/>

				<ProductCard
					imageURL={SoccerBall}
					alt="shoes"
					title="Super soccer"
					price={40}
					isDiscount
					discountAmount={30}
				/>
				<ProductCard
					imageURL={BaseballGlove}
					alt="shoes"
					title="Wilson c-2000"
					price={40}
				/>
			</div>
		</section>
	);
};

export default Store;
