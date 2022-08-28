import React, { useContext } from 'react';

import HiddenBlock from '../../HiddenBlock/HiddenBlock';
import SkyLogic from '../../BackgroundApp/BackgroundApp';
import { globalThemeContext } from '../../../contexts/theme';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './tools.scss';

function Tools({ sortingValue, setSortingValue, allChecked, setAllChecked }) {
	
	const [searchParams, setSearchParams] = useSearchParams();
	const { theme, setTheme } = useContext(globalThemeContext);

	const updateData = (sortFieldName) => (childSelectValue) => {
		const newSoringValue = { ...sortingValue };
		newSoringValue[sortFieldName] = childSelectValue;
		setSortingValue(newSoringValue);
	};
	
	return (
		<section className="tools">
			<ul className="tools__list">
				<HiddenBlock
					searchParams={searchParams.get('author')}
					handleSelect={updateData('author')}
					dataArray={[
						{name: 'Все авторы', id: 0},
						{name :'Ханс Христиан Андерсен', id: 1},
						{name :'Леонид Пантеллев', id: 2},
						{name :'Виктор Драгунский', id: 3},
						{name :'Джозеф Джейкобс', id: 4},
						{name :'Дина Непомнящая', id: 5},
						{name :'Эндрю Лэнг', id: 6},
						{name :'Джек Лондон', id: 7},
					]}
				/>
				<HiddenBlock
					searchParams={searchParams.get('genre')}
					handleSelect={updateData('genre')}
					dataArray={[
						{name: 'Все жанры', id: 0},
						{name: 'Приключение', id: 1},
						{name: 'Обучение', id: 2},
						{name: 'Колыбельная песня', id: 3},
					]}
				/>
				<HiddenBlock
					searchParams={searchParams.get('onlyText')}
					handleSelect={updateData('onlyText')}
					dataArray={[
						{name: 'Показать все', id: 0},
						{name: 'Показать только с текстом', id: 1},
						{name: 'Показать только со звуком', id: 2},
					]}
				/>
				<div className="tools__item">
					<input
						type="checkbox"
						checked={allChecked ? true : false}
						className="tools__checkbox"
						onChange={() => setAllChecked(!allChecked)}
						id="tools__check"
					/>
					<label htmlFor="tools__check"><p className="tools__available">Посмотреть доступные</p></label>
				</div>
				<div className="tools__theme"
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
			<SkyLogic theme={theme} />
		</section>
	);
}

Tools.propTypes = {
	sortingValue: PropTypes.shape({
		author: PropTypes.string,
		genre: PropTypes.string,
		onlyText: PropTypes.string,
	}), 
	setSortingValue: PropTypes.func, 
	allChecked: PropTypes.bool, 
	setAllChecked: PropTypes.func,
}

export default Tools;