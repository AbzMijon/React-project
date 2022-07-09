import React from 'react';

//import React-Components
import BooksItem from './BooksItem';

//import Images
/* import beautyAndTerribleImg from '../../assets/images/beautyAndTerrible.jpeg';
import dragon from '../../assets/images/dragon.jpeg';
import fairyTales from '../../assets/images/fairyTales.jpeg';
import fenka from '../../assets/images/fenka.jpeg';
import kingFrog from '../../assets/images/kingFrog.jpeg';
import mamontic from '../../assets/images/mamont.jpeg';
import threePigs from '../../assets/images/pigsTree.jpeg';
import prinses from '../../assets/images/princes.jpeg';
import snowQueen from '../../assets/images/snowQueen.jpeg' */;

function BooksSection() {
    return (
        <section className='books'>
        <ul className='books__list'>
            <BooksItem post={{id:1, title:'Снежная королева', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618645584328.jpeg', isAvailable:false}}/>
            <BooksItem post={{id:2, title:'Фенька', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620741041368.jpeg', isAvailable:false}}/>
            <BooksItem post={{id:3, title:'Рыцари', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620808141774.jpeg', isAvailable:true}}/>
            <BooksItem post={{id:4, title:'Три маленьких поросенка', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1619356519779.jpeg', isAvailable:false}}/>
            <BooksItem post={{id:5, title:'Мамонтенок', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620807600838.jpeg', isAvailable:false}}/>
            <BooksItem post={{id:6, title:'Дракон Севера', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618671042924.jpeg', isAvailable:false}}/>
            <BooksItem post={{id:7, title:'Красная Шапка', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618247886403.jpeg', isAvailable:false}}/>
            <BooksItem post={{id:8, title:'Красавица и чудовище', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618673467128.jpeg', isAvailable:false}}/>
            <BooksItem post={{id:9, title:'Король-лягушка', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618649820912.jpeg', isAvailable:true}}/>
        </ul>
    </section>
    )
}

export default BooksSection;