import React, { useState } from 'react';

//Components
import NotAvailableModal from '../NotAvailableModal/NotAvailableModal';

//fake server
import { dataBaseBooks } from '/fakeServer/db';

//React-Icons
import { FaLock } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';

//Routing
import { useNavigate } from 'react-router-dom';

//styles
import './BooksSection.scss';

function BooksSection() {

    const [valueOfAvailableModal, setAvailableModal] = useState(false);
    const navigate = useNavigate();

    return (
        <section className='books'>
        <ul className='books__list'>
            {dataBaseBooks.map((e) => {
                return (
                    <div className="books__wrapper" key={e.id}>
                                <li className='books__item' onClick={e.isAvailable ? () => {navigate(`/bookContent/id?=${e.id}`)} : () => {setAvailableModal(true)}}>
                                    <figure className='books__figure'>
                                        <img src= {e.src}  alt='' className='books__img' />
                                        <div className='books__add'><BsHeart className='fa-add-heart' /></div>
                                        {!e.isAvailable &&
                                            <FaLock className='fa-lock' />
                                        }
                                    </figure>
                                    <figcaption className='books__name'>{e.title}</figcaption>
                                </li>
                            {valueOfAvailableModal &&
                                <NotAvailableModal valueOfAvailableModal={valueOfAvailableModal} setAvailableModal={setAvailableModal}/>
                            }     
                    </div>
                ) 
            })}
        </ul>
    </section>
    )
}

export default BooksSection;