import React, { useContext } from 'react';

import HiddenBlock from '@src/Components/HiddenBlock/HiddenBlock';
import { globalThemeContext } from '@src/Contexts/theme';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './tools.scss';

export const AUTHORS_LIST = [
	{name: 'Все авторы', id: 'all'},
	{name :'Ханс Христиан Андерсен', id: 1},
	{name :'Леонид Пантеллев', id: 2},
	{name :'Виктор Драгунский', id: 3},
	{name :'Джозеф Джейкобс', id: 4},
	{name :'Дина Непомнящая', id: 5},
	{name :'Эндрю Лэнг', id: 6},
	{name :'Джек Лондон', id: 7},
]

export const GENRE_LIST = [
	{name: 'Все жанры', id: 'all'},
	{name: 'Приключение', id: 1},
	{name: 'Обучение', id: 2},
	{name: 'Колыбельная песня', id: 3},
]

export const TYPE_LIST = [
	{name: 'Показать все', id: 'all'},
	{name: 'Показать только с текстом', id: 1},
	{name: 'Показать только со звуком', id: 2},
]

function Tools({ filtersList, sortingValue, setSortingValue, allChecked, setAllChecked }) {
	
	const [searchParams, setSearchParams] = useSearchParams();
	const { theme, setTheme } = useContext(globalThemeContext);

	const updateData = (sortFieldName) => (childSelectValue) => {
		const newSoringValue = { ...sortingValue };
		newSoringValue[sortFieldName] = childSelectValue;
		setSortingValue(newSoringValue);
	};
	
	return (
		<section className='tools'>
			<ul className='tools__list'>
				{Object.keys(filtersList).map((listItemName, i) => (
					<HiddenBlock
						key={i}
						searchParams={searchParams.get(listItemName)}
						handleSelect={updateData(listItemName)}
						dataArray={filtersList[listItemName].filterOptions}
					/>
				))}
				<div className='tools__item'>
					<input
						type='checkbox'
						checked={allChecked ? true : false}
						className='tools__checkbox'
						onChange={() => setAllChecked(!allChecked)}
						id='tools__check'
					/>
					<label htmlFor='tools__check'><p className='tools__available'>Посмотреть доступные</p></label>
				</div>
				<div className='tools__theme'
					onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
					<div className={
							theme === 'dark'
								? 'tools__wrap-theme--dark wrap-theme'
								: 'tools__wrap-theme wrap-theme'
						}>
						<div className={
								theme === 'dark'
									? 'tools__circle-theme--dark circle'
									: 'tools__circle-theme circle'
							}>
                        </div>
					</div>
				</div>
			</ul>
		</section>
	);
}

Tools.propTypes = {
	sortingValue: PropTypes.shape({
		author: PropTypes.string,
		genre: PropTypes.string,
		type: PropTypes.string,
	}), 
	setSortingValue: PropTypes.func, 
	allChecked: PropTypes.bool, 
	setAllChecked: PropTypes.func,
}

export default Tools;