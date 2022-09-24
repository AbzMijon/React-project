import React from 'react';

import { Outlet, Link, useNavigate } from 'react-router-dom';
import { PATH } from '@src/constans/routes';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import './userProfile.scss';

function UserProfile() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch({type: 'userLogOut'});
        navigate(PATH.initialPage);
    }
    
    return (
        <div className='profile'>
            <Link to={PATH.initialPage}> <AiFillHome className='home-icon profile--icon' /> </Link>
            <h2 className='profile__title'>Личный кабинет</h2>
            <div className='profile__logout' onClick={logOut}>Выйти<BiLogOut className='logout-icon' /></div>
            <Outlet />
        </div>
    )
}

export default UserProfile;