//import React
import React, { useState } from 'react';

//import Components
import BooksItem from '../Components/BooksItem';
import Tools from '../Components/Tools';
//import helpers

function Main () {
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

                    <section className='books'>
                        <ul className='books__list'>
                                <BooksItem post={{id:1, title:'Снежная королева', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618645584328.jpeg'}}/>
                                <BooksItem post={{id:2, title:'Фенька', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620741041368.jpeg'}}/>
                                <BooksItem post={{id:3, title:'Рыцари', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620808141774.jpeg'}}/>
                                <BooksItem post={{id:4, title:'Три маленьких поросенка', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1619356519779.jpeg'}}/>
                                <BooksItem post={{id:5, title:'Мамонтенок', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620807600838.jpeg'}}/>
                                <BooksItem post={{id:6, title:'Дракон Севера', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618671042924.jpeg'}}/>
                                <BooksItem post={{id:7, title:'Красная Шапка', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618247886403.jpeg'}}/>
                                <BooksItem post={{id:8, title:'Красавица и чудовище', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618673467128.jpeg'}}/>
                                <BooksItem post={{id:9, title:'Король-лягушка', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618649820912.jpeg'}}/>
                        </ul>
                    </section>
                    <div className="cloud cloud-1"></div>
                    <div className="cloud cloud-2"></div>
                </div>
            </main>
        )
    }

export default Main;