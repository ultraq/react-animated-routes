
import classNames from 'classnames';
import React from 'react';

const PageA = ({className}) => (
	<section className={classNames('page', 'page-a', className)}>
		<header>
			<h1>Page A</h1>
		</header>
	</section>
);

export default PageA;
