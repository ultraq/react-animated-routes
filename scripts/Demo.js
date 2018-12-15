
import asyncComponent from './asyncComponent.js';
import Navigation from './Navigation.js';

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Fragment>
			<Navigation/>
			<div className="page-wrapper">
				<Switch>
					<Route path="/a" component={asyncComponent(() => {
						return import(/* webpackChunkName: 'demo-page-a' */ './PageA.js');
					})}/>
					<Route path="/b" component={asyncComponent(() => {
						return import(/* webpackChunkName: 'demo-page-b' */ './PageB.js');
					})}/>
					<Route path="/c" component={asyncComponent(() => {
						return import(/* webpackChunkName: 'demo-page-c' */ './PageC.js');
					})}/>
				</Switch>
			</div>
		</Fragment>
	</Router>,
	document.getElementById('react-root')
);
