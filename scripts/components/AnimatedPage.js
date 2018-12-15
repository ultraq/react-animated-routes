
import classNames from 'classnames';
import React, {Component} from 'react';

export default class AnimatedPage extends Component {

	state = {
		entering: false,
		exiting: false,
		stationary: false
	};

	componentDidMount() {

		this.setState({
			entering: true
		});
	}

	onAnimationEnd(event) {

		let {target} = event;
		let {entering} = this.state;
		if (target.classList.contains('page-anim')) {
			if (entering) {
				this.setState({
					entering: false,
					stationary: true
				});
			}
		}
	}

	render() {

		let {children} = this.props;
		let {entering, exiting, stationary} = this.state;

		return entering || exiting || stationary ? React.cloneElement(children, {
			className: classNames(children.props.className, 'page-anim', {'page-entry': entering}, {'page-exit': exiting}),
			onAnimationEnd: event => this.onAnimationEnd(event)
		}) : null;
	}
}
