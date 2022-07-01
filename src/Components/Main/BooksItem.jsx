import React from 'react';

//import React-Icons
import { FaLock } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';

function BooksItem(props) {
    return (
        <li className='books__item'>
            <figure className='books__figure'>
            <img src= {props.post.src}  alt='' className='books__img' />
            <div className='books__add'><BsHeart className='fa-add-heart' /></div>
            <FaLock className='fa-lock' />
            </figure>
            <figcaption className='books__name'>{props.post.title}</figcaption>
        </li>
    )
}

export default BooksItem;