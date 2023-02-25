import React from 'react';
import ProductCard from './ProductCard';
import ShopFilters from './ShopFilters';
import Shoes1 from '/shoes1.webp';
import Shoes2 from '/shoes2.webp';
import Shoes3 from '/shoes3.webp';
import Shirt1 from '/shirt1.webp';

const Store = () => {
	return (
		<section className=" h-screen bg-orange-500 p-3">
			<div className="mb-5">
				<h3 className="mb-5 font-display text-xl tracking-wider text-white">
					Filtrar
				</h3>
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
				/>
			</div>
		</section>
	);
};

export default Store;
