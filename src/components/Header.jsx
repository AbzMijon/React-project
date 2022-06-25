import React from 'react';

class Header extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="header">
				<div className="container">
                    <h2 className="header__login">{this.props.loginName}</h2>
                    <div className="header__input-wrap">
                        <input type="text" placeholder='Поиск..' className="header__search" />
                        <i className ="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <i className ="fa-solid fa-heart"></i>
                </div>
			</header>
		);
	}
}

export default Header;