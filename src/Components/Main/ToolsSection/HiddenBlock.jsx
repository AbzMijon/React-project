import React from 'react';

function HiddenBlock(props) {
    return(
        <div className='tools__hidden-block'>
            <ul className='tools__hidden-list'>
                {
                    props.data.map(elem => {
                        return <li className='tools__hidden-item'>{elem}</li>
                    })
                }

            </ul>
        </div>
    )
}

export default HiddenBlock;