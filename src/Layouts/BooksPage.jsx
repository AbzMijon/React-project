import React from "react";

//Routing
import { Outlet } from 'react-router-dom';

function BooksPage() {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
}

export default BooksPage;