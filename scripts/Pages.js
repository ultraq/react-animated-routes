
import isMovingForward from './Routes.js';

import classNames from 'classnames';
import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Transition, TransitionGroup} from 'react-transition-group';
import PageA from './views/PageA.js';
import PageB from './views/PageB.js';
import PageC from './views/PageC.js';

const ComponentToFunction = ({children, ...props}) => {
	return children(props);
};

const useAnimationForEndTransition = (node, done) => {
	node.addEventListener('animationend', done);
};

// TODO: Holy cow this is complex!  Find a way to extract the animation logic
//       out into something to the side, like context, hooks, HOCs, FACs,
//       anything!
const Pages = ({children, location}) => (
	<div className="page-wrapper">
		<TransitionGroup component={null} childFactory={child => {
			return React.cloneElement(child, {
				animationDirection: isMovingForward(location) ? 'route' : 'route-reverse'
			});
		}}>
			<ComponentToFunction key={location.key}>
				{({animationDirection, ...transitionProps}) => (
					<Transition addEndListener={useAnimationForEndTransition} {...transitionProps}>
						{state => (
							<Switch location={location}>
								<Route path="/a" render={routeProps => (
									<PageA {...routeProps} className={classNames('route', `${animationDirection}-${state}`)}/>
								)}/>
								<Route path="/b" render={routeProps => (
									<PageB {...routeProps} className={classNames('route', `${animationDirection}-${state}`)}/>
								)}/>
								<Route path="/c" render={routeProps => (
									<PageC {...routeProps} className={classNames('route', `${animationDirection}-${state}`)}/>
								)}/>
							</Switch>
						)}
					</Transition>
				)}
			</ComponentToFunction>
		</TransitionGroup>
	</div>
);

export default withRouter(Pages);
