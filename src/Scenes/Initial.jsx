import React, { useState } from 'react';

//Components
import BooksSection from '../Components/Books/BooksSection';
import Tools from '../Components/Tools/Tools';

function InitialScene() {

    const [isCheckboxClicked, setAllChecked] = useState(false);
    const allChecked = () => {
        setAllChecked(!isCheckboxClicked);
    }
    return (
        <main className='main'>
            <div className='container'>  
                <Tools headerCheckbox={allChecked} />
                <BooksSection />
            </div>
        </main>
    )
}

export default InitialScene;