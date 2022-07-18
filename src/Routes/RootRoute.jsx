import React from 'react';

//Components
import MainLayout from '../Layouts/MainLayout';
import BooksPage from '../Layouts/BooksPage';
import LoginPage from '../Layouts/LoginPage';
import AuthorizationWindow from '../Components/Authorization/AuthorizationWindow'
import BookContent from '../Scenes/BookContent/BookContent'
import Sorting from '../Scenes/Sorting/Sorting';

//CONSTANS
import { BOOKS_ROUTES } from '../constans/routes';

//Routing
import { Routes, Route } from 'react-router-dom';

function RootRoute() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='/' element={<Sorting/>}></Route>
            </Route>
            
            <Route path='/authorization' element={<LoginPage />}>
                <Route path='/authorization' element={<AuthorizationWindow />}></Route>
            </Route>

            <Route path='/bookContent/id?=3' element={<BooksPage />}>
                <Route path='/bookContent/id?=3' element={<BookContent />}></Route>
            </Route>
            
            <Route path='*' element={<h2 className='erorr--not-found'>Ресурс не найден!</h2>}></Route>
        </Routes>
    )
}

export default RootRoute;