import React from 'react';
import WomanStretching from '/woman_stretching.webp';
import ManTrack from '/man_track.webp';
import PersonCard from './PersonCard';
import SoccerKid from '/soccer_kid.webp';

const GenreFilter = () => {
	return (
		<section className="p-8">
			<div className="flex flex-col items-center gap-8">
				<PersonCard
					title="Mujeres"
					imageURL={WomanStretching}
					alt="mujer estirandoce"
				/>
				<PersonCard
					title="Hombres"
					imageURL={ManTrack}
					alt="hombre estirandoce"
				/>
				<PersonCard
					title="Niños"
					imageURL={SoccerKid}
					alt="niño jugando futbol"
				/>
			</div>
		</section>
	);
};

export default GenreFilter;
