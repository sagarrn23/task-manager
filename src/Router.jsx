import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Board, Home } from './container';

const Router = () => {
	return (
		<Switch>
			<Route path="/board" component={Board} />
			<Route exact path="/task-manager/" component={Home} />
			<Route path="*">
				<Redirect to="/task-manager/" />
			</Route>
		</Switch>
	);
};

export default Router;
