import React from 'react';
import Header from '../../../components/Header/Header';
import MenuPanel from '../../../components/MenuPanel/MenuPanel';
import { Link } from 'react-router-dom';

function Board() {
	return (
		<div>
			<Header />
			<MenuPanel />
			Board
			<Link to="/home">Home</Link>
		</div>
	);
}

export default Board;
