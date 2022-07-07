import React from 'react';

function HiddenBlock(props) {
    return(
            <select className='tools__hidden-list' name='toolItem'>
                {
                    props.data.map((elem, i) => {
                        return <option key={i} className='tools__hidden-item'>{elem}</option>
                    })
                }
            </select>
    )
}

export default HiddenBlock;