import React, { useState } from 'react';
import AddTaskBtn from '../../../components/AddTaskBtn/AddTaskBtn';
import DragPanel from '../../../components/DragPanel/DragPanel';
import Modal from '../../../components/Modal/Modal';

function Board() {
	const [openModal, setOpenModal] = useState(false);
	return (
		<div className="p-4 grow-1">
			<DragPanel />
			<AddTaskBtn setModal={setOpenModal} />
			{openModal ? <Modal setModal={setOpenModal} /> : null}
		</div>
	);
}

export default React.memo(Board);
