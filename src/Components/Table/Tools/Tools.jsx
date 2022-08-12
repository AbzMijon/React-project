import React, { useContext } from 'react';

import HiddenBlock from '../../HiddenBlock/HiddenBlock';
import BackgroundApp from '../../BackgroundApp/BackgroundApp';
import { globalThemeContext } from '../../../contexts/theme';
import { useSearchParams } from 'react-router-dom';

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
						'Все авторы',
						'Ханс Христиан Андерсен',
						'Леонид Пантеллев',
						'Виктор Драгунский',
						'Джозеф Джейкобс',
						'Дина Непомнящая',
						'Эндрю Лэнг',
						'Джек Лондон',
					]}
				/>
				<HiddenBlock
					searchParams={searchParams.get('genre')}
					handleSelect={updateData('genre')}
					dataArray={[
						'Все жанры',
						'Приключение',
						'Обучение',
						'Колыбельная песня',
					]}
				/>
				<HiddenBlock
					searchParams={searchParams.get('onlyText')}
					handleSelect={updateData('onlyText')}
					dataArray={[
						'Показать все',
						'Показать только с текстом',
						'Показать только со звуком',
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
					<label htmlFor="tools__check">
						<p className="tools__available">Посмотреть доступные</p>
					</label>
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
			<BackgroundApp theme={theme} />
		</section>
	);
}

export default Tools;