import React from 'react';

//Components
import InitialScene from '../Scenes/Initial';
import MainLayout from '../Layouts/MainLayout';
import BooksPage from '../Layouts/BooksPage';
import LoginPage from '../Layouts/LoginPage';
import AuthorizationWindow from '../Components/Authorization/AuthorizationWindow'
import BookContent from '../Scenes/BookContent';

//CONSTANS
import { BOOKS_ROUTES } from '../constans/routes';

//Routing
import { Routes, Route } from 'react-router-dom';

function RootRoute() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='/' element={<InitialScene/>}></Route>
            </Route>
            
            <Route path='/authorization' element={<LoginPage />}>
                <Route path='/authorization' element={<AuthorizationWindow />}></Route>
            </Route>

            <Route path={BOOKS_ROUTES.bookPage} element={<BooksPage />}>
                <Route path={BOOKS_ROUTES.bookPage} element={<BookContent />}></Route>
            </Route>
        </Routes>
    )
}

export default RootRoute;