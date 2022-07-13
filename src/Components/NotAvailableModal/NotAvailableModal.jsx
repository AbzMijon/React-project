import React from "react";

//styles
import './NotAvailableModa.scss';

function NotAvailableModal({ valueOfAvailableModal, setAvailableModal }) {
    
    return (
        <div className={valueOfAvailableModal ? 'modal active' : 'modal'} onClick={() => {setAvailableModal(false)}}>
            <div className="modal__content" onClick={(e) => {e.stopPropagation()}}>
                <p className="modal__text">It book is not available for you ;(</p>
                <button className="modal-ok" type="button" onClick={() => {setAvailableModal(false)}}>Ок</button>
            </div>
        </div>
    )
}

export default NotAvailableModal;