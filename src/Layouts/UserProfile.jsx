import React from "react";

import { Outlet } from "react-router-dom";

function UserProfile() {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
}

export default UserProfile;