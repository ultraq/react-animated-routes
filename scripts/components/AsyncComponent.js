
import classNames from 'classnames';
import React, {Component} from 'react';

export default class AsyncComponent extends Component {

	state = {
		component: null
	};

	componentDidMount() {

		this.props.loader().then(component => {
			this.setState({
				component: component.default
			});
		});
	}

	render() {

		let {className, loader, ...componentProps} = this.props;
		let Comp = this.state.component;

		return (
			<div className={classNames('route', {[className]: !!Comp})}>
				{Comp ? <Comp {...componentProps}/> : null}
			</div>
		);
	}
}
