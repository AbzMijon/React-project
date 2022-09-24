import React from 'react';

import { Outlet } from 'react-router-dom';;
import './BookPage.scss';

function BookPage() {
    return (
        <div className='book__wrapper'>
            <Outlet />
        </div>
    )
}

export default BookPage;