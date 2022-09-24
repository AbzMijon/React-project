import React, { Suspense } from 'react';

//Components
import MainLayout from '@src/Layouts/MainLayout/MainLayout';
import BookPage from '@src/Layouts/BookPage/BookPage';
import UserProfile from '@src/Layouts/UserProfile/UserProfile';
import Login from '@src/Layouts/Login/Login';
import Spinner from '@src/Components/SpinnerLoading/Spinner';

//CONSTANS
import { ROUTES } from '@src/constans/routes.ts';

//Routing
import { Routes, Route } from 'react-router-dom';

//React lazy
const Sorting = React.lazy(() => import('@src/Scenes/Sorting/Sorting'));
const LoginPage = React.lazy(() => import('@src/Scenes/Login/LoginPage.tsx'));
const BookContent = React.lazy(() => import('@src/Scenes/BookContent/BookContent'));
const Profile = React.lazy(() => import('@src/Scenes/Profile/Profile'));

function RootRoute() {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path={ROUTES.initialPage} element={<MainLayout />}>
                    <Route path={ROUTES.initialPage} element={<Sorting />}></Route>
                </Route>
                
                <Route path={ROUTES.loginPage} element={<Login />}>
                    <Route path={ROUTES.loginPage} element={<LoginPage />}></Route>
                </Route>

                <Route path={ROUTES.bookPage} element={<BookPage />}>
                    <Route path={ROUTES.bookPage} element={<BookContent />}></Route>
                </Route>

                <Route path={ROUTES.userProfile} element={<UserProfile />}>
                    <Route path={ROUTES.userProfile} element={<Profile />}></Route>
                </Route>
                
                <Route path='*' element={<h2 className='erorr--not-found'>Ресурс не найден!</h2>}></Route>
            </Routes>
        </Suspense>
    )
}

export default RootRoute;