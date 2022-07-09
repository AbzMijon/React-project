import React from 'react';

//import React-Icons
import { FaLock } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';

import { Link } from 'react-router-dom';

function BooksItem(props) {

    const notAvailableWindow = () => {
        if(!props.post.isAvailable) {
            console.log('It is close book ;(');
        }
    }
    return (
            <Link to ={props.post.isAvailable ? '/bookContent' : '/'}>
            <li className='books__item' onClick={notAvailableWindow}>
                <figure className='books__figure'>
                    <img src= {props.post.src}  alt='' className='books__img' />
                    <div className='books__add'><BsHeart className='fa-add-heart' /></div>
                    {!props.post.isAvailable &&
                        <FaLock className='fa-lock' />
                    }
                </figure>
                <figcaption className='books__name'>{props.post.title}</figcaption>
            </li>
        </Link>
    )
}

export default BooksItem;