import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { store } from '../../store';
import { v4 as uuidv4 } from 'uuid';

function AddTaskBtn() {
	const globalState = useContext(store);
	const { dispatch, state } = globalState;
	const updateTask = () => {
		dispatch({
			type: 'SET_MODAL_STATE',
			modalDisplay: true
		});
		dispatch({
			type: 'TASK_EDIT_STATUS',
			value: false
		});
		dispatch({
			type: 'SET_MODAL_DATA',
			updatedData: {
				title: '',
				description: '',
				images: [],
				id: uuidv4(),
				status: 'to-do',
				dueDate: '18-01-2022',
				userId: '5'
			}
		});
	};
	return (
		<div
			className="fixed rounded-full bg-teal-400 right-[2rem] bottom-[2rem] w-14 h-14 text-white flex justify-center items-center cursor-pointer drop-shadow-md"
			onClick={updateTask}
		>
			<FontAwesomeIcon icon={faPlus} size="1x" />
		</div>
	);
}

export default React.memo(AddTaskBtn);
