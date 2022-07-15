import React from 'react';

function HiddenBlock({ dataArray }) {

    return (
        <li className="tools__item">
            <select className='tools__hidden-list' name='toolItem'>
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