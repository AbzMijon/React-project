import React from 'react';

import PropTypes from 'prop-types';
import './notAvailableModal.scss';

function NotAvailableModal({ bookSrc, valueOfAvailableModal, setValueOfAvailableModal }) {

	return (
		<div className={valueOfAvailableModal ? 'modal active' : 'modal'}
			onClick={() => {
				setValueOfAvailableModal(false);
			}}
		>
			<div className='modal__content'
				onClick={(e) => e.stopPropagation()}
			>
				<img src={bookSrc} className='modal__img' alt='bookIMG' />
				<p className='modal__text'>Эта книжка доступна только для авторизованных пользователей;(</p>
				<button
					className='modal-ok'
					type='button'
					onClick={() => {
						setValueOfAvailableModal(false);
					}}
				>
					Ок
				</button>
			</div>
		</div>
	);
}

NotAvailableModal.propTypes = {
	bookSrc: PropTypes.string.isRequired,
	valueOfAvailableModal: PropTypes.bool.isRequired,
	setValueOfAvailableModal: PropTypes.func,
}

export default NotAvailableModal;