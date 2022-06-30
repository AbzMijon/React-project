//import React
import React, { useState } from 'react';

//import React-Icons
import { BsHeart } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

const Header = function(props) {
	const [value, setValue] = useState('')
	const [isOver, setOver] = useState(false);

	const changeMouseOver = function() {
		setOver(true);
	}
	const changeMouseDef = function() {
		setOver(false);
	}

		return (
			<header className='header'>
				<div className='container'>
					<div className='header__wrap'>
						<h2 className='header__login'>Войти</h2>
						<div className='header__input-wrap'>
							<input
							type='text'
							placeholder='Поиск..'
							className='header__search'
							value={value} 
							onChange={(e) => setValue(e.target.value)}/>
							
							<button className='header__submit' type='submit'><FaSearch className='fa-search' onMouseOver={changeMouseOver} onMouseOut={changeMouseDef} /></button>
							{
								isOver && value ?
								<p className='header__search-prompt'>{value} ?</p>
								:
								<div></div>
							}
							
						</div>
						<div className='header__liked'><BsHeart className='fa-heart' /></div>
					</div>
                    
                </div>
			</header>
		);
}

export default Header;