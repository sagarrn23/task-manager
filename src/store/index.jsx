import React, { createContext, useReducer } from 'react';
import { func } from './actions';

const initialState = [
	{
		id: 1,
		title: '',
		description: '',
		userId: ''
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
