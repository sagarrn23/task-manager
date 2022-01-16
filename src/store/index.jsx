import React, { createContext, useReducer } from 'react';
import { func } from './actions';

const initialState = [
	{
		id: 1,
		title: 'Get Veggies',
		description: 'Go to dmart and get some vegitables',
		images: [],
		userId: 1,
		status: 'to-do',
		dueDate: '18-01-2022'
	},
	{
		id: 2,
		title: 'Drink water',
		description: 'Drink a glass of water every 2 hours',
		images: [],
		userId: 2,
		status: 'done',
		dueDate: '31-01-2022'
	},
	{
		id: 3,
		title: 'Complete Assignment',
		description: 'Complete the college assignment',
		images: [],
		userId: 3,
		status: 'review',
		dueDate: '18-01-2022'
	}
];

const reducer = (state, action) => {
	switch (action.type) {
		case 'ABCD':
			return func(state, action.value);
		default:
			return state;
	}
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
