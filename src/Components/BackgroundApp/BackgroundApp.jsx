import React from 'react';

import PropTypes from 'prop-types';
import './backgroundApp.scss';

function BackgroundApp({ theme }) {
	return (
		<React.Fragment>
			{theme === 'light' ? (
				<div className='clouds'>
					<div className='cloud cloud-1'></div>
					<div className='cloud cloud-2'></div>
				</div>
			) : (
				<div className='moon'></div>
			)}
		</React.Fragment>
	);
}

BackgroundApp.propTypes = {
	theme: PropTypes.string,
}

export default BackgroundApp;
