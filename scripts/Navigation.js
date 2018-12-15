
import classNames from 'classnames';
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Navigation extends Component {

	/**
	 * @return {*}
	 */
	render() {

		let {location} = this.props;
		let path = location.pathname;

		return (
			<nav className="navigation">
				<Link to="/a" className={classNames('link', 'link-a', {'link-selected': path === '/a'})}>
					Page A
				</Link>
				<Link to="/b" className={classNames('link', 'link-b', {'link-selected': path === '/b'})}>
					Page B
				</Link>
				<Link to="/c" className={classNames('link', 'link-c', {'link-selected': path === '/c'})}>
					Page C
				</Link>
			</nav>
		);
	}
}

export default withRouter(Navigation);
