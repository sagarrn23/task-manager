import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Board, Home } from './container';

const prodBasePath = import.meta.env.PROD
	? 'https://sagarrn23.github.io/task-manager/'
	: '/';

const Router = () => {
	return (
		<Switch>
			<Route path={prodBasePath + 'board'} component={Board} />
			<Route exact path={prodBasePath} component={Home} />
			<Route path="*">
				<Redirect to={prodBasePath} />
			</Route>
		</Switch>
	);
};

export default Router;
