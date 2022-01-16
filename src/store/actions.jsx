import { setTasks } from '../services/setTasks';

export const getStoredTasks = (globalState, data) => {
	return data;
};

export const updateStatus = (globalState, status, id) => {
	const state = [...globalState];
	const newState = state.map((task) => {
		if (task.id === id) task.status = status;
		return task;
	});
	setTasks(newState);
	return newState;
};
