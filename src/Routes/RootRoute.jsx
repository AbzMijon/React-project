import React from 'react';

//Components
import MainLayout from '../Layouts/MainLayout';
import BookContensPage from '../Layouts/BookContensPage';
import LoginPage from '../Layouts/LoginPage';
import AuthorizationWindow from '../Components/Authorization/AuthorizationWindow'
import BookContent from '../Components/BookContent/BookContent';
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

            <Route path='/bookContent/:bookID' element={<BookContensPage />}>
                <Route path='/bookContent/:bookID' element={<BookContent />}></Route>
            </Route>
            
            <Route path='*' element={<h2 className='erorr--not-found'>Ресурс не найден!</h2>}></Route>
        </Routes>
    )
}

export default RootRoute;