import React, { useContext } from 'react';
import { store } from '../../store';

function Card({ provided, item, snapshot }) {
	const globalState = useContext(store);
	const { dispatch, state } = globalState;

	const updateTask = () => {
		dispatch({
			type: 'SET_MODAL_STATE',
			modalDisplay: true
		});
		dispatch({
			type: 'TASK_EDIT_STATUS',
			value: true
		});
		const taskToEdit = state.tasks.filter((task) => task.id === item.id)[0];
		dispatch({
			type: 'SET_MODAL_DATA',
			updatedData: {
				...taskToEdit
			}
		});
	};

	return (
		<div
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			className="bg-white rounded-default drop-shadow-xl mb-4 p-2 hover:cursor-pointer"
			onClick={updateTask}
		>
			<p className="text-black font-bold">{item.title}</p>
		</div>
	);
}

export default React.memo(Card);
