
import Navigation from './components/Navigation.js';
import Pages from './Pages.js';

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Fragment>
			<Navigation/>
			<Pages/>
		</Fragment>
	</Router>,
	document.getElementById('react-root')
);
