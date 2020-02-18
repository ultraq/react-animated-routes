
import isMovingForward from './Routes.js';
import AsyncComponent  from './components/AsyncComponent.js';

import React                         from 'react';
import {Route, Switch, withRouter}   from 'react-router-dom';
import {Transition, TransitionGroup} from 'react-transition-group';

const ComponentToFunction = ({children, ...props}) => {
	return children(props);
};

const useAnimationForEndTransition = (node, done) => {
	node.addEventListener('animationend', done);
};

// TODO: Holy cow this is complex!  Find a way to extract the animation logic
//       out into something to the side, like context, hooks, HOCs, FACs,
//       anything!
const Pages = ({location}) => (
	<div className="pages">
		<TransitionGroup component={null} childFactory={child => {
			return React.cloneElement(child, {
				animationDirection: isMovingForward(location) ? 'route' : 'route-reverse'
			});
		}}>
			<ComponentToFunction key={location.key}>
				{({animationDirection, ...transitionProps}) => (
					<Transition addEndListener={useAnimationForEndTransition} {...transitionProps}>
						{state => {
							let routeClass = `${animationDirection}-${state}`;
							return (
								<Switch location={location}>
									<Route path="/a" render={() => (
										<AsyncComponent loader={() => import('./views/PageA.js')} className={routeClass}/>
									)}/>
									<Route path="/b" render={() => (
										<AsyncComponent loader={() => import('./views/PageB.js')} className={routeClass}/>
									)}/>
									<Route path="/c" render={() => (
										<AsyncComponent loader={() => import('./views/PageC.js')} className={routeClass}/>
									)}/>
								</Switch>
							);
						}}
					</Transition>
				)}
			</ComponentToFunction>
		</TransitionGroup>
	</div>
);

export default withRouter(Pages);
