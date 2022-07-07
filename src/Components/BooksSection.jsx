import React from 'react';

//import React-Components
import BooksItem from './BooksItem';

function BooksSection() {
    return (
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
    )
}

export default BooksSection;