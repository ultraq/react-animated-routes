
import React, {Component} from 'react';

export default function asyncComponent(loader) {
	return class AsyncComponent extends Component {
		state = {
			component: null
		};
		componentDidMount() {
			loader().then(component => {
				this.setState({
					component: component.default
				});
			});
		}
		render() {
			const Comp = this.state.component;
			return Comp ? <Comp {...this.props}/> : null;
		}
	};
}
