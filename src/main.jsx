import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { StateProvider } from './store';

ReactDOM.render(
	<StateProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</StateProvider>,
	document.getElementById('root')
);
