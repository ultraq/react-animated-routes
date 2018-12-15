
import isMovingForward from './Routes.js';

import React from 'react';
import {Switch, withRouter} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const determineTransition = (child) => {
	return React.cloneElement(child, {
		classNames: isMovingForward(location) ? 'route' : 'route-reverse'
	});
};

const useAnimationForEndTransition = (node, done) => {
	node.addEventListener('animationend', done);
};

const Pages = ({children, location}) => (
	<div className="page-wrapper">
		<TransitionGroup component={null} childFactory={determineTransition}>
			<CSSTransition key={location.key} classNames="route" appear={true}
				addEndListener={useAnimationForEndTransition}>
				<Switch location={location}>
					{children}
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	</div>
);

export default withRouter(Pages);
