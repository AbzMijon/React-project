import React, { useState } from 'react';

//React-Icons
import { FaLock } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';

//Routing
import { Link } from 'react-router-dom';

//Components
import NotAvailableModal from './NotAvailableModal';

function BooksItem({ post }) { 
    
    const [valueOfAvailableModal, setAvailableModal] = useState(false);
    const notAvailableWindow = () => {
        if(!post.isAvailable) {
            setAvailableModal(true);
        }
    }

    return (
        <React.Fragment>
            {post.isAvailable ?
                <Link to ='/bookContent'>
                    <li className='books__item' onClick={notAvailableWindow}>
                        <figure className='books__figure'>
                            <img src= {post.src}  alt='' className='books__img' />
                            <div className='books__add'><BsHeart className='fa-add-heart' /></div>
                            {!post.isAvailable &&
                                <FaLock className='fa-lock' />
                            }
                        </figure>
                        <figcaption className='books__name'>{post.title}</figcaption>
                    </li>
                    {valueOfAvailableModal &&
                        <NotAvailableModal valueOfAvailableModal={valueOfAvailableModal} setAvailableModal={setAvailableModal}/>
                    }
                </Link>
            :
                <div className="books__wrap">
                    <li className='books__item' onClick={notAvailableWindow}>
                        <figure className='books__figure'>
                            <img src= {post.src}  alt='' className='books__img' />
                            <div className='books__add'><BsHeart className='fa-add-heart' /></div>
                            {!post.isAvailable &&
                                <FaLock className='fa-lock' />
                            }
                        </figure>
                        <figcaption className='books__name'>{post.title}</figcaption>
                    </li>
                    {valueOfAvailableModal &&
                        <NotAvailableModal valueOfAvailableModal={valueOfAvailableModal} setAvailableModal={setAvailableModal}/>
                    }
                </div>
            }
        </React.Fragment>
    )
}

export default BooksItem;