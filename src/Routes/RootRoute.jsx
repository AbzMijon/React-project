import React from 'react';

//Components
import MainLayout from '../Layouts/MainLayout';
import BookContensPage from '../Layouts/BookContensPage';
import LoginPage from '../Layouts/LoginPage';
import AuthorizationWindow from '../Scenes/Login/AuthorizationWindow';
import BookContent from '../Scenes/BookContent/BookContent';
import Sorting from '../Scenes/Sorting/Sorting';
import UserProfile from '../Layouts/userProfile';
import Profile from '../Scenes/Profile/Profile';

//CONSTANS
import { ROUTES } from '../constans/routes.ts';

//Routing
import { Routes, Route } from 'react-router-dom';

function RootRoute() {
    return (
        <Routes>
            <Route path={ROUTES.initialPage} element={<MainLayout />}>
                <Route path={ROUTES.initialPage} element={<Sorting/>}></Route>
            </Route>
            
            <Route path={ROUTES.loginPage} element={<LoginPage />}>
                <Route path={ROUTES.loginPage} element={<AuthorizationWindow />}></Route>
            </Route>

            <Route path={ROUTES.bookPage} element={<BookContensPage />}>
                <Route path={ROUTES.bookPage} element={<BookContent />}></Route>
            </Route>

            <Route path={ROUTES.userProfile} element={<UserProfile />}>
                <Route path={ROUTES.userProfile} element={<Profile />}></Route>
            </Route>
            
            <Route path='*' element={<h2 className='erorr--not-found'>Ресурс не найден!</h2>}></Route>
        </Routes>
    )
}

export default RootRoute;