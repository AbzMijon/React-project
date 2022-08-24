import React from 'react';

import { serverMessageError } from '../../store/selectors/serverErrorSelectors.js';
import { useSelector } from 'react-redux';
import serverError from '../../assets/images/serverError.png';
import './serverError.scss';

function ServerError() {
	const message = useSelector(serverMessageError);
	return (
		<div className="response-error">
			<h2 className="response-error__title">{message}</h2>
			<img src={serverError} alt="" />
		</div>
	);
}

export default ServerError;