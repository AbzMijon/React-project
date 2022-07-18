import React from "react";

//styles
import './notAvailableModa.scss';

function NotAvailableModal({ bookSrc, valueOfAvailableModal, setAvailableModal }) {

    return (
        <div className={valueOfAvailableModal ? 'modal active' : 'modal'} onClick={() => {setAvailableModal(false)}}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <img src={bookSrc} className="modal__img" alt="bookIMG" />
                <p className="modal__text">Эта книжка не доступна вам ;(</p>
                <button className="modal-ok" type="button" onClick={() => {setAvailableModal(false)}}>Ок</button>
            </div>
        </div>
    )
}

export default NotAvailableModal;