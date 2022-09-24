import React, { Component } from 'react';

import './globalErrorBoundary.scss';

class GlobalErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className='global-error'>
					<h2 className='global-error__title'>
						Ой, что-то пошло не так! :(
					</h2>
					<a target='_blank' href='https://t.me/Abz_mijon'>
						<button className='global-error__btn btn' type='button'>
							Сообщить о проблеме
						</button>
					</a>
				</div>
			);
		} else {
			return <React.Fragment>{this.props.children}</React.Fragment>;
		}
	}
}

export default GlobalErrorBoundary;