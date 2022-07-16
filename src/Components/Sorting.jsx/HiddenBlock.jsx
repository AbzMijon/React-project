import React, { useState } from 'react';


function HiddenBlock({ dataArray, dataToParent }) {

    const [selectValue, setSelectValue] = useState(''); 

    const selectChange = (event) => {
        dataToParent(event.target.value);
        setSelectValue(event.target.value);
    }

    return (
            <li className="tools__item">
                <select className='tools__hidden-list' name='toolItem' value={selectValue} onChange={selectChange}>
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