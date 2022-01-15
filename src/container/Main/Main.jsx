import React from 'react';
import Router from '../../Router';
import Header from '../../components/Header/Header';
import MenuPanel from '../../components/MenuPanel/MenuPanel';

function Main() {
	return (
		<div className="w-screen h-screen flex">
			<div className="h-full">
				<MenuPanel />
			</div>
			<div className="grow">
				<Header />
				<Router />
			</div>
		</div>
	);
}

export default Main;
