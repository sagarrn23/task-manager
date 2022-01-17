import { setTasks } from '../services/setTasks';

export const getStoredTasks = (globalState, data) => {
	return {
		...globalState,
		tasks: data
	};
};

export const updateStatus = (globalState, status, id) => {
	const taskList = [...globalState.tasks];
	const newState = taskList.map((task) => {
		if (task.id === id) task.status = status;
		return task;
	});
	setTasks(newState);
	return {
		...globalState,
		tasks: newState
	};
};

export const setModalState = (globalState, modalDisplay) => {
	return {
		...globalState,
		modalState: modalDisplay
	};
};

export const setMenuPanelState = (globalState, menuPanelDisplay) => {
	return {
		...globalState,
		menuPanelState: menuPanelDisplay
	};
};

export const addNewTask = (globalState, newTask) => {
	const tasks = [...globalState.tasks];
	tasks.push(newTask);
	return {
		...globalState,
		tasks: tasks
	};
};

export const updateExistingTask = (globalState, updateTask) => {
	const tasks = [...globalState.tasks].map((task) => {
		if (task.id === updateTask.id) {
			return updateTask;
		}
		return task;
	});
	return {
		...globalState,
		tasks: tasks
	};
};

export const setModalData = (globalState, updatedData) => {
	return {
		...globalState,
		modalData: {
			...updatedData
		}
	};
};

export const taskEditStatus = (globalState, value) => {
	return {
		...globalState,
		updating: value
	};
};

export const filterTasks = (globalState, isChecked, userId) => {
	let filteredTasks = [...globalState.tasks];
	if (isChecked && userId) {
		filteredTasks = globalState.tasks.filter(
			(task) => +task.userId === +userId
		);
	} else {
		filteredTasks = [...globalState.allTasks];
	}
	return {
		...globalState,
		allTasks: [...globalState.tasks],
		tasks: filteredTasks
	};
};
