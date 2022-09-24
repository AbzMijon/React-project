import React from 'react';

import { serverMessageError } from '@src/store/selectors/serverErrorSelectors.js';
import { useSelector } from 'react-redux';
import serverError from '@src/assets/images/serverError.png';
import './serverError.scss';

function ServerError() {
	const message = useSelector(serverMessageError);
	return (
		<div className='response-error'>
			<h2 className='response-error__title'>{message}</h2>
			<img src={serverError} alt='' />
		</div>
	);
}

export default ServerError;