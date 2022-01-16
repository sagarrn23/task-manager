import React, { useEffect, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './container/Main/Main';
import { getTasks } from './services/getTasks';
import { store } from './store';

function App() {
	const globalState = useContext(store);
	const { dispatch, state } = globalState;

	useEffect(() => {
		const storedTask = getTasks();
		dispatch({
			type: 'GET_STORED_TASKS',
			data: storedTask
		});
	}, []);

	return (
		<BrowserRouter>
			<Main />
		</BrowserRouter>
	);
}

export default App;
