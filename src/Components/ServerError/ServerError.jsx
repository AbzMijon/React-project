import React from "react";

import './serverError.scss';

function ServerError() {
    return (
                <div className="response-error">
                    <h2 className="response-error__title">Error</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vvhcoWaokPW536ohTq2-EAL0ch75Swn5pQ&usqp=CAU" alt="" />
                </div>
        
    )
}

export default ServerError;