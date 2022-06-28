import React from 'react';

class Header extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="header">
				<div className="container">
					<div className="header__wrap">
						<h2 className="header__login">{this.props.loginName}</h2>
						<div className="header__input-wrap">
							<input type="text" placeholder='Поиск..' className="header__search" />
							<button className='header__submit' type='submit'><i className ="fa-solid fa-magnifying-glass"></i></button>
						</div>
						<div className='header__liked'><i className ="fa-solid fa-heart"></i></div>
					</div>
                    
                </div>
			</header>
		);
	}
}

export default Header;