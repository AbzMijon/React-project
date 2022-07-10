import React, { useState } from 'react';

//React-Icons
import { BsHeart } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

//Routing
import { Link } from 'react-router-dom';

function Header() {
	
	const [value, setValue] = useState('')

		return (
			<header className='header'>
				<div className='container'>
					<div className='header__wrap'>
							{window.location.href !== 'http://localhost:3000/authorization' ?
								<Link to='/authorization'>
									<h2 className='header__login'>Войти</h2>
								</Link>
								:
								<Link to='/'>
									<h2 className='header__login'>Назад</h2>
								</Link>
							}
						<div className='header__input-wrap'>
							<input
							type='text'
							placeholder='Поиск..'
							className='header__search'
							value={value} 
							onChange={(e) => setValue(e.target.value)} />
							
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