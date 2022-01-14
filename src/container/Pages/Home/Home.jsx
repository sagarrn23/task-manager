import React from 'react';
import Header from '../../../components/Header/Header';
import MenuPanel from '../../../components/MenuPanel/MenuPanel';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div>
			<Header />
			<MenuPanel />
			Home
			<Link to="/board">Board</Link>
		</div>
	);
}

export default Home;
