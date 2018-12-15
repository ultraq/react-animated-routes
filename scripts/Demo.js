
import Navigation from './Navigation.js';
import PageA from './PageA.js';
import PageB from './PageB.js';
import PageC from './PageC.js';

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Fragment>
			<Navigation/>
			<div className="page-wrapper">
				<Switch>
					<Route path="/a" render={routeProps => <PageA {...routeProps}/>}/>
					<Route path="/b" render={routeProps => <PageB {...routeProps}/>}/>
					<Route path="/c" render={routeProps => <PageC {...routeProps}/>}/>
				</Switch>
			</div>
		</Fragment>
	</Router>,
	document.getElementById('react-root')
);
