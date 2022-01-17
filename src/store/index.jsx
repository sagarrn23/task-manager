import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
	updateStatus,
	getStoredTasks,
	setModalState,
	addNewTask,
	updateExistingTask,
	setModalData,
	taskEditStatus,
	filterTasks,
	setMenuPanelState,
	removeTask
} from './actions';

const initialState = {
	modalState: false,
	updating: false,
	menuPanelState: true,
	modalData: {
		title: '',
		description: '',
		images: [],
		id: uuidv4(),
		status: 'to-do',
		dueDate: '',
		userId: ''
	},
	tasks: [],
	allTasks: []
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_STORED_TASKS':
			return getStoredTasks(state, action.data);
		case 'UPDATE_STATUS':
			return updateStatus(state, action.newStatus, action.taskId);
		case 'SET_MODAL_STATE':
			return setModalState(state, action.modalDisplay);
		case 'SET_MENU_PANEL_STATE':
			return setMenuPanelState(state, action.menuPanelDisplay);
		case 'ADD_NEW_TASK':
			return addNewTask(state, action.newTask);
		case 'UPDATE_TASK':
			return updateExistingTask(state, action.updateTask);
		case 'SET_MODAL_DATA':
			return setModalData(state, action.updatedData);
		case 'TASK_EDIT_STATUS':
			return taskEditStatus(state, action.value);
		case 'FILTER_TASKS':
			return filterTasks(state, action.isChecked, action.userId);
		case 'REMOVE_TASK':
			return removeTask(state, action.taskId);
		default:
			return state;
	}
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// localStorage.setItem(
	// 	'tasksDB',
	// 	JSON.stringify([
	// 		{
	// 			id: '1',
	// 			title: 'Get Veggies',
	// 			description: 'Go to dmart and get some vegitables',
	// 			images: [],
	// 			userId: 1,
	// 			status: 'to-do',
	// 			dueDate: '18-01-2022'
	// 		},
	// 		{
	// 			id: '2',
	// 			title: 'Drink water',
	// 			description: 'Drink a glass of water every 2 hours',
	// 			images: [],
	// 			userId: 2,
	// 			status: 'done',
	// 			dueDate: '31-01-2022'
	// 		},
	// 		{
	// 			id: '3',
	// 			title: 'Complete Assignment',
	// 			description: 'Complete the college assignment',
	// 			images: [],
	// 			userId: 3,
	// 			status: 'in-review',
	// 			dueDate: '18-01-2022'
	// 		},
	// 		{
	// 			id: '4',
	// 			title: 'Complete Assignment',
	// 			description: 'Complete the college assignment',
	// 			images: [],
	// 			userId: 3,
	// 			status: 'in-review',
	// 			dueDate: '18-01-2022'
	// 		}
	// 	])
	// );

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
