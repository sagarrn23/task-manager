import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { store } from '../../store';

function Header() {
	const globalState = useContext(store);
	const { dispatch, state } = globalState;

	const changeMenuPanelState = () => {
		dispatch({
			type: 'SET_MENU_PANEL_STATE',
			menuPanelDisplay: !state.menuPanelState
		});
	};

	return (
		<div className="text-center text-xl font-bold p-2 border-b-2 border-b-solid border-b-teal-400 relative">
			<FontAwesomeIcon
				icon={faBars}
				size="1x"
				className="absolute left-[1rem] top-[50%] -translate-y-[50%] cursor-pointer"
				onClick={changeMenuPanelState}
			/>
			Task Board
		</div>
	);
}

export default React.memo(Header);
