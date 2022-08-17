import React, { useState } from 'react';

import './hiddenBlock.scss';

function HiddenBlock({ searchParams, dataArray, handleSelect }) {
	const [selectValue, setSelectValue] = useState('');

	const selectChange = (event) => {
		handleSelect(event.target.value);
		setSelectValue(event.target.value);
	};

	return (
		<li className="tools__item">
			<select
				className="tools__hidden-list"
				name="toolItem"
				defaultValue={searchParams || selectValue}
				onChange={selectChange}
			>
				{dataArray.map((elem) => {
					return (
						<option key={elem.id} className="tools__hidden-item">
							{elem.name}
						</option>
					);
				})}
			</select>
		</li>
	);
}

export default HiddenBlock;
