import React, { useState } from 'react';

//Components
import BooksSection from '../Components/BooksSection';
import Tools from '../Components/Tools';

function InitialScene() {
    const [isAuthorsVisible, setAuthorsVisible] = useState(false);
    const [isGenresVisible, setGenresVisible] = useState(false);
    const [isAllVisible, setAllVisible] = useState(false);
    const [isCheckboxClicked, setAllChecked] = useState(false);

    const authorsVisible = () => {
        setAuthorsVisible(!isAuthorsVisible);
        setGenresVisible(false), setAllVisible(false);
    }
    const genresVisible = () => {
        setGenresVisible(!isGenresVisible);
        setAllVisible(false), setAuthorsVisible(false);
    }
    const allVisible = () => {
        setAllVisible(!isAllVisible);
        setGenresVisible(false), setAuthorsVisible(false);
    }

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