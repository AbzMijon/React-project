import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InitialScene from '../Scenes/InitialScene';

//import React-Components
import MainLayout from '../Layouts/MainLayout';

function RootRoute() {
    return (
        <Routes>
            <Route path={'/'} element={
                <MainLayout />
            }>
                <Route path={'/'} element={<InitialScene/>}></Route>
            </Route>
        </Routes>
    )
}

export default RootRoute;