import React from 'react';
import Router from '../../Router';
import Header from '../../components/Header/Header';
import MenuPanel from '../../components/MenuPanel/MenuPanel';

function Main() {
	return (
		<div className="w-screen h-screen flex">
			<div className="h-full w-[5%]">
				<MenuPanel />
			</div>
			<div className="w-[95%] flex flex-col">
				<Header />
				<Router />
			</div>
		</div>
	);
}

export default React.memo(Main);
