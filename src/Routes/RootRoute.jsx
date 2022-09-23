import React, { Suspense } from 'react';

//Components
import MainLayout from '../Layouts/MainLayout/MainLayout';
import BookPage from '../Layouts/BookPage/BookPage';
import UserProfile from '../Layouts/UserProfile/UserProfile';
import Login from '../Layouts/Login/Login';
import Spinner from '../Components/SpinnerLoading/Spinner';

//CONSTANS
import { ROUTES } from '../constans/routes.ts';

//Routing
import { Routes, Route } from 'react-router-dom';

//React lazy
const Sorting = React.lazy(() => import('../Scenes/Sorting/Sorting'));
const LoginPage = React.lazy(() => import('../Scenes/Login/LoginPage.tsx'));
const BookContent = React.lazy(() => import('../Scenes/BookContent/BookContent'));
const Profile = React.lazy(() => import('../Scenes/Profile/Profile'));

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