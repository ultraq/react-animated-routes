
// import asyncComponent from './asyncComponent.js';
import isMovingForward from './isMovingForward.js';
import Navigation from './Navigation.js';
import PageA from './PageA.js';
import PageB from './PageB.js';
import PageC from './PageC.js';

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

ReactDOM.render(
	<Router>
		<Route render={({location}) => (
			<Fragment>
				<Navigation location={location}/>
				<div className="page-wrapper">
					<TransitionGroup component={null} childFactory={child => {
						return React.cloneElement(child, {
							classNames: isMovingForward(location) ? 'route' : 'route-reverse'
						});
					}}>
						<CSSTransition key={location.key} classNames="route" appear={true} addEndListener={(node, done) => {
							node.addEventListener('animationend', done);
						}}>
							<Switch location={location}>
								<Route path="/a" component={PageA}/>
								<Route path="/b" component={PageB}/>
								<Route path="/c" component={PageC}/>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				</div>
			</Fragment>
		)}/>
	</Router>,
	document.getElementById('react-root')
);
