import React, { useState } from 'react';

import BooksSection from '../src/Components/BooksSection';
import Tools from '../src/Components/Tools';

function InitialScene() {
    const [isAuthorsVisible, setAuthorsVisible] = useState(false);
    const [isGenresVisible, setGenresVisible] = useState(false);
    const [isAllVisible, setAllVisible] = useState(false);
    const [isCheckboxClicked, setAllChecked] = useState(false);

    const authorsVisible = function() {
        setAuthorsVisible(!isAuthorsVisible);
        setGenresVisible(false), setAllVisible(false);
    }
    const genresVisible = function() {
        setGenresVisible(!isGenresVisible);
        setAllVisible(false), setAuthorsVisible(false);
    }
    const allVisible = function() {
        setAllVisible(!isAllVisible);
        setGenresVisible(false), setAuthorsVisible(false);
    }

    const allChecked = function() {
        setAllChecked(!isCheckboxClicked);
    }
    return (
        <main className='main'>
            <div className='container'>  
                <Tools states={{Authors:isAuthorsVisible, Genres:isGenresVisible, All:isAllVisible, Checkbox:isCheckboxClicked}} events={{authors:authorsVisible, genres:genresVisible, all:allVisible, checkbox: allChecked}}  />
                <BooksSection />
            </div>
        </main>
    )
}

export default InitialScene;