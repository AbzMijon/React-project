import React from "react";

import { FaUserAlt } from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from 'react-icons/bi';

import { PATH } from "../../constans/routes.js";
import { useNavigate } from 'react-router-dom';
import { loggedUserName, loggedUserPassword } from '../../store/selectors/userSelectors';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import './profile.scss';

function Profile() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userName = useSelector(loggedUserName);
    const randomInteger = (min, max) => {
        let rand = min + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    const logOut = () => {
        dispatch({type: 'userLogOut'});
        navigate(PATH.initialPage);
    }
    return (
        <React.Fragment>
            <div className="profile">
                <div className="go-home" onClick={() => navigate(PATH.initialPage)}><AiFillHome className="home-icon"/></div>
                <h2 className="profile__title">Личный кабинет</h2>
                <div className="profile__logout" onClick={logOut}>Выйти<BiLogOut className="logout-icon" /></div>
                <div className="profile__wrap">
                    <FaUserAlt className="profile__icon" />
                    <h2 className="profile__username">{userName}</h2>
                    <div className="profile__liked-books"></div>
                    <ul className="profile__menu">
                        <li className="profile__item" onClick={() => navigate(PATH.bookPage(randomInteger(1, 9)))}>Посоветуйте мне книгу!</li>
                        <li className="profile__item" onClick={logOut}>Я хочу выйти с аккаунта!</li>
                        <li className="profile__item"><a target="_blank" href="https://t.me/Abz_mijon">Хочу написать разработчику сайта</a></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile;