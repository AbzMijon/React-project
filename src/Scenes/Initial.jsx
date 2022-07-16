import React, { useState } from 'react';

//Components !!!
import Sorting from '../Components/Sorting.jsx/Sorting';

function InitialScene() {

    const [isCheckboxClicked, setAllChecked] = useState(false);
    const allChecked = () => {
        setAllChecked(!isCheckboxClicked);
    }
    return (
        <main className='main'>
            <div className='container'>  
                <Sorting headerCheckbox={allChecked} />
            </div>
        </main>
    )
}

export default InitialScene;