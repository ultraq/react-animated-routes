
import React, {Component, Fragment} from 'react';

export default class AnimatedPageGroup extends Component {

	constructor(props) {

		super(props);
		this.state = {
			children: props.children
		};
	}

	static getDerivedStateFromProps(props, state) {

		let oldChildCount = React.Children.count(state.children);
		let newChildCount = React.Children.count(props.children);

		if (oldChildCount === newChildCount) {
			let oldChildKey = state.children.key;
			let newChildKey = props.children.key;

			if (oldChildKey !== newChildKey) {
				let newChildren = [state.children, props.children];
				return {
					children: newChildren
				};
			}
		}

		return {
			children: props.children
		};
	}

	render() {

		let {children} = this.state;

		return (
			<Fragment>
				{children}
			</Fragment>
		);
	}
}
