import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '@src/store/selectors/userSelectors';
import { PATH } from '@src/constans/routes.ts';
import { loggedUserName } from '@src/store/selectors/userSelectors';
import { BiLogIn } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { FaSearch, FaUserAlt } from 'react-icons/fa';
import SelectedBooks from '@src/Components/SelectedBooks/SelectedBooks';
import PropTypes from 'prop-types';
import './header.scss';

function Header({ searchString, setsearchString, selectedBooks, setSelectedBooks, setValueOfAvailableModal }) {
	
    const [checkLikedBooks, setCheckLikedBooks] = useState(false);
    const navigate = useNavigate();
    const userLoggedIn = useSelector(isLoggedIn);
    const userName = useSelector(loggedUserName);

    return (
        <header className='header'>
		<div className='container'>
			<div className='header__wrap'>
				<h2
					className='header__login'
					onClick={() =>
						navigate(
							userLoggedIn
								? PATH.userProfile(userName)
								: PATH.loginPage
						)
					}
				>
					{!userLoggedIn ? (
						<div className='login-wrap'>
							<BiLogIn className='mini-icon-for-ui' /> Войти
						</div>
					) : (
						<div className='logout-wrap'>
							<FaUserAlt className='mini-icon-for-ui' />
							<p className='header__name'>{userName}</p>
						</div>
					)}
				</h2>
				<div className='header__input-wrap'>
					<input
						type='text'
						placeholder='Поиск..'
						className='header__search'
						value={searchString}
						onChange={(e) => setsearchString(e.target.value)}
					/>

					<button className='header__submit' type='submit'>
						{<FaSearch className='fa-search' />}
					</button>
					{searchString && (
						<p className='header__search-prompt'>{searchString + '?'}</p>
					)}
				</div>
				<div className='header__liked' onClick={() => setCheckLikedBooks(true)}>
					<AiFillHeart className='fa-heart' />
					{selectedBooks.length > 0 && (
						<div className='header__heart-counter'>{selectedBooks.length}</div>
					)}
				</div>
				{checkLikedBooks && (
					<SelectedBooks
						setValueOfAvailableModal={setValueOfAvailableModal}
						selectedBooks={selectedBooks}
						setSelectedBooks={setSelectedBooks}
						setCheckLikedBooks={setCheckLikedBooks}
					/>
				)}
			</div>
		</div>
	</header>
    )
}

Header.propTypes = {
	searchString: PropTypes.string, 
	setsearchString: PropTypes.func, 
	selectedBooks: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string,
        genre: PropTypes.string,
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        isAvailableForGuest: PropTypes.bool,
        onlyText: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
        ]),
        src: PropTypes.string,
        text: PropTypes.string,
        title: PropTypes.string,
    })), 
	setSelectedBooks: PropTypes.func, 
	setValueOfAvailableModal: PropTypes.func,
}

export default Header;