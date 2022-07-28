import React from "react";

import './notAvailableModa.scss';

function NotAvailableModal({ bookSrc, valueOfAvailableModal, setValueOfAvailableModal }) {

    return (
        <div className={valueOfAvailableModal ? 'modal active' : 'modal'} onClick={() => {setValueOfAvailableModal(false)}}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <img src={bookSrc} className="modal__img" alt="bookIMG" />
                <p className="modal__text">Эта книжка не доступна вам ;(</p>
                <button className="modal-ok" type="button" onClick={() => {setValueOfAvailableModal(false)}}>Ок</button>
            </div>
        </div>
    )
}

export default NotAvailableModal;