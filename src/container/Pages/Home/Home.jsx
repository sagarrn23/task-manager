import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../../components/Title/Title';

function Home() {
	return (
		<div className="flex justify-center items-center h-full">
			<Title />
		</div>
	);
}

export default React.memo(Home);
