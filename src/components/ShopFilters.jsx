import React from 'react';

const ShopFilters = () => {
	return (
		<form className="flex items-center gap-3">
			<select
				name="filtro-persona"
				id="filtro-persona"
				className="w-fit rounded-full border-2 border-white bg-orange-500 text-sm   text-white accent-white focus:border-orange-700 focus:ring-orange-700"
			>
				<option value="" disabled selected hidden>
					Persona
				</option>
				<option value="mujeres">Mujeres</option>
				<option value="hombres">Hombres</option>
				<option value="unisex">Unisex</option>
				<option value="niños">Niños</option>
			</select>

			<select
				name="filtro-producto"
				id="filtro-producto"
				className="w-fit rounded-full border-2 border-white bg-orange-500 text-sm text-white   focus:border-orange-700 focus:ring-orange-700"
			>
				<option value="" disabled selected hidden>
					Producto
				</option>
				<option value="todo">Todo</option>
				<option value="hombres">Calzado</option>
				<option value="hombres">Camisas</option>
				<option value="hombres">Leggings</option>
				<option value="hombres">Balones</option>
			</select>

			<select
				name="filtro-precio"
				id="filtro-precio"
				className="w-fit rounded-full border-2 border-white bg-orange-500 text-sm text-white   focus:border-orange-700 focus:ring-orange-700"
			>
				<option value="" disabled selected hidden>
					Precio
				</option>
				<option value="todo">Menor</option>
				<option value="todo">Mayor</option>
			</select>
		</form>
	);
};

export default ShopFilters;
