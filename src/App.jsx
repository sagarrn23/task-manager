import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './container/Main/Main';

function App() {
	return (
		<BrowserRouter>
			<Main />
		</BrowserRouter>
	);
}

export default App;
