import React, { useState } from 'react';

import './hiddenBlock.scss';

function HiddenBlock({ dataArray, handleSelect }) {

    const [selectValue, setSelectValue] = useState(''); 

    const selectChange = (event) => {
        handleSelect(event.target.value);
        setSelectValue(event.target.value);
    }

    return (
            <li className="tools__item">
                <select className='tools__hidden-list' name='toolItem' defaultValue={selectValue} onChange={selectChange}>
                    {
                        dataArray.map((elem, i) => {
                            return <option key={i} className='tools__hidden-item'>{elem}</option>
                        })
                    }
                </select>
            </li>
    )
}

export default HiddenBlock;