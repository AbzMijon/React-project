import React from 'react';

function HiddenBlock({ dataArray }) {

    return (
            <select className='tools__hidden-list' name='toolItem'>
                {
                    dataArray.map((elem, i) => {
                        return <option key={i} className='tools__hidden-item'>{elem}</option>
                    })
                }
            </select>
    )
}

export default HiddenBlock;