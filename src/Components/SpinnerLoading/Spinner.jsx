import React from 'react';

import { RotatingLines } from 'react-loader-spinner';
import './spinner.scss';

function Spinner() {
	return (
		<div className="spinner">
			<h5 className="spinner__title">Подождите немного</h5>
			<RotatingLines
				strokeColor="grey"
				strokeWidth="5"
				animationDuration="0.75"
				width="96"
				visible={true}
			/>
		</div>
	);
}

export default Spinner;
