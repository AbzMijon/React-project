import React, { useState } from 'react';

import PropTypes from 'prop-types';
import './hiddenBlock.scss';

function HiddenBlock({ searchParams, dataArray, handleSelect }) {
	
	const [selectValue, setSelectValue] = useState('');

	const selectChange = (event) => {
		handleSelect(event.target.value);
		setSelectValue(event.target.value);
	};

	return (
		<li className='tools__item'>
			<select
				className='tools__hidden-list'
				name='toolItem'
				defaultValue={searchParams || selectValue}
				onChange={selectChange}
			>
				{dataArray.map((elem) => {
					return (
						<option key={elem.id} value={elem.id} className='tools__hidden-item'>
							{elem.name}
						</option>
					);
				})}
			</select>
		</li>
	);
}

HiddenBlock.propTypes = {
	searchParams: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
	handleSelect: PropTypes.func.isRequired,
	dataArray: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default HiddenBlock;
