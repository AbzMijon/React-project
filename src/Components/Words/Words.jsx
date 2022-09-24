import React from 'react';

import './words.scss';

function Words({ currentWord }) {
    return (
        <React.Fragment>
            {currentWord.join(' ')}
        </React.Fragment>
    )
}

export default Words;