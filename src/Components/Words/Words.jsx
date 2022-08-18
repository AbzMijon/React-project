import React from "react";

import './words.scss';

function Words({ words }) {
    return (
        <React.Fragment>
            {words.join(' ')}
        </React.Fragment>
    )
}

export default Words;