import React from "react";

function SkyLogic({ theme }) {
    return (
        <React.Fragment>
            {theme === 'light' ?
                <div className="clouds">
                    <div className="cloud cloud-1"></div>
                    <div className="cloud cloud-2"></div>
                </div>
                :
                    <div className="moon"></div>
            }
        </React.Fragment>
    )
}

export default SkyLogic;