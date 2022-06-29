//import React
import React from 'react';

//import React-Icons
import { BsHeart } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

class Header extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className='header'>
				<div className='container'>
					<div className='header__wrap'>
						<h2 className='header__login'>{this.props.loginName}</h2>
						<div className='header__input-wrap'>
							<input type='text' placeholder='Поиск..' className='header__search' />
							<button className='header__submit' type='submit'><FaSearch className='fa-search' /></button>
						</div>
						<div className='header__liked'><BsHeart className='fa-heart' /></div>
					</div>
                    
                </div>
			</header>
		);
	}
}

export default Header;