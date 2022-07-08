import React from 'react';
import { Routes, Route } from 'react-router-dom';

//import React-Components
import InitialScene from '../Scenes/Initial';
import MainLayout from '../Layouts/MainLayout';
import Authorization from '../Scenes/Authorization';

function RootRoute() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='/' element={<InitialScene/>}></Route>
            </Route>
            
            <Route path='/authorization' element={<MainLayout />}>
                <Route path='/authorization' element={Authorization}></Route>
            </Route>
        </Routes>
    )
}

export default RootRoute;