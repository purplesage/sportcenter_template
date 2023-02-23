import React from 'react';
import DumbellSVG from './DumbellSVG.jsx';
import { BiMenu } from 'react-icons/bi';

const Header = () => {
	return (
		<div className="absolute left-3 flex w-full items-center justify-between p-3">
			<h3 className="flex items-center gap-1 font-display text-lg tracking-wide text-white">
				<span className="fill-orange-500">
					<DumbellSVG />
				</span>
				SPORTCENTER
			</h3>

			<BiMenu className="mr-5 h-8 w-8 text-orange-500" />
		</div>
	);
};

export default Header;
