//import React
import React, { useState } from 'react';

//import React-Icons
import { FaAngleRight } from 'react-icons/fa';

//import Components
import BooksItem from './BooksItem';
import Tools from './Tools';
//import helpers

const Main = function(props) {
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
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Снежная королева', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618645584328.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Фенька', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620741041368.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Рыцари', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620808141774.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Три маленьких поросенка', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1619356519779.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Мамонтенок', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620807600838.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Дракон Севера', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618671042924.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Красная Шапка', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618247886403.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Красавица и чудовище', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618673467128.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Король-лягушка', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618649820912.jpeg'}}/>
                        </ul>
                    </section>
                </div>
            </main>
        )
    }

export default Main;