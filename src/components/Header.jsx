import React from 'react';
import DumbellSVG from './DumbellSVG.jsx';
import { BiMenu } from 'react-icons/bi';

const Header = () => {
	return (
		<header className="absolute top-0 z-20 flex w-full items-center justify-between bg-slate-500/20 p-3 backdrop-blur">
			<h3 className="ml-3 flex items-center gap-1 font-display text-lg tracking-wide text-white">
				<span className="fill-orange-500">
					<DumbellSVG />
				</span>
				SPORTCENTER
			</h3>

			<BiMenu className="mr-5 h-6 w-6 text-orange-500" />
		</header>
	);
};

export default Header;
