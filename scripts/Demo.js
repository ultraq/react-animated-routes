
import Pages      from './Pages.js';
import Navigation from './components/Navigation.js';

import React, {Fragment}         from 'react';
import ReactDOM                  from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Fragment>
			<Navigation/>
			<Pages/>
		</Fragment>
	</Router>,
	document.getElementById('react-root')
);
