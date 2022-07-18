import React, { useState } from 'react';

//React-Icons
import { BsHeart } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa'

//Routing
import { Link } from 'react-router-dom';

//styles
import './header.scss';

function Header({ dataToParent }) {
	
	const [value, setValue] = useState('');
	const searchValuesParams = (event) => {
		dataToParent(event.target.value);
		setValue(event.target.value);
	}

		return (
			<header className='header'>
				<div className='container'>
					<div className='header__wrap'>
							{window.location.href !== 'http://localhost:3000/authorization' ?
								<Link to='/authorization'>
									<h2 className='header__login'><FaRegUserCircle className='mini-icon-for-ui' /> Войти</h2>
									<FaRegUserCircle className='header__icon--mobile' />
								</Link>
								:
								<Link to='/'>
									<h2 className='header__login'>Назад </h2>
									<FaRegUserCircle className='header__icon--mobile' />
								</Link>
							}
						<div className='header__input-wrap'>
							<input
							type='text'
							placeholder='Поиск..'
							className='header__search'
							value={value} 
							onChange={searchValuesParams} />
							
							<button className='header__submit' type='submit'>{<FaSearch className='fa-search'/>}</button>

								{value &&
									<p className='header__search-prompt'>{value + '?'}</p>
								}
							
						</div>
						<div className='header__liked'><BsHeart className='fa-heart' /></div>
					</div>
                    
                </div>
			</header>
		);
}

export default Header;