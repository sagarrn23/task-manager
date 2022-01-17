import React, { useContext } from 'react';
import { store } from '../../store';

function Switch() {
	const globalState = useContext(store);
	const { dispatch, state } = globalState;

	const filterUserTasks = (isChecked) => {
		dispatch({
			type: 'FILTER_TASKS',
			isChecked: isChecked,
			userId: '1'
		});
	};

	return (
		<div className="m-2 mb-8 flex justify-end items-center">
			<label className="cursor-pointer" htmlFor="check">
				Show my tasks only
			</label>
			<input
				className="ml-2 cursor-pointer"
				type="checkbox"
				name=""
				id="check"
				onChange={(e) => filterUserTasks(e.target.checked, '1')}
			/>
		</div>
	);
}

export default Switch;
Switch;
