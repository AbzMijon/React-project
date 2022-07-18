import React, { useState } from 'react';

//Components
import Header from '../Components/Header/Header';

//Routing
import { Outlet } from 'react-router-dom'

function MainLayout () {

    const [searchValue, setSearchValue] = useState('');
    const updateData = (childSearchValue) => {
        setSearchValue(childSearchValue)
    }

        return (
            <React.Fragment>
                {new Error("go problem with Outlet props header-search")}
                <Header dataToParent={updateData} />
                <Outlet searchValue={searchValue} />
            </React.Fragment>
        )
    }

export default MainLayout;