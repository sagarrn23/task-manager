import React, { useContext } from 'react';
import Router from '../../Router';
import Header from '../../components/Header/Header';
import MenuPanel from '../../components/MenuPanel/MenuPanel';
import { store } from '../../store';

function Main() {
	const globalState = useContext(store);
	const { state } = globalState;

	return (
		<div className="w-screen h-screen flex">
			<div
				className="h-full w-[5%] min-w-[80px] transition-all"
				style={{ display: state.menuPanelState ? 'block' : 'none' }}
			>
				<MenuPanel />
			</div>
			<div className="w-[100%] flex flex-col">
				<Header />
				<Router />
			</div>
		</div>
	);
}

export default React.memo(Main);
