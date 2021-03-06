import React, { useContext } from 'react';
import AddTaskBtn from '../../../components/AddTaskBtn/AddTaskBtn';
import DragPanel from '../../../components/DragPanel/DragPanel';
import Modal from '../../../components/Modal/Modal';
import Switch from '../../../components/Switch/Switch';
import { store } from '../../../store';

function Board() {
	const globalState = useContext(store);
	const { dispatch, state } = globalState;

	return (
		<div className="p-4 grow-1  h-screen overflow-auto">
			<Switch />
			<DragPanel />
			<AddTaskBtn />
			{state.modalState ? <Modal /> : null}
		</div>
	);
}

export default React.memo(Board);
