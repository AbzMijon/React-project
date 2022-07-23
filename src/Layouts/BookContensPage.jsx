import React from "react";

import { Outlet } from 'react-router-dom';

function BookContensPage() {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
}

export default BookContensPage;