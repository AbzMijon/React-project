import React from "react";

import './spinner.scss';

function Spinner() {
    return (
        <div className="spinner">
			<h5 className="spinner__title">Подождите немного</h5>
			<img className="spinner__img" src="https://i.gifer.com/VAyR.gif" alt="" />
		</div>
    )
}

export default Spinner;