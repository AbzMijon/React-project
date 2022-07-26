import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../constans/routes";

//styles
import './authorizationWindow.scss';

function AuthorizationWindow() {
    return (
        <div className="login__wrap">
            <Link to={PATH.initialPage}><h4 className='login__back'>Вернуться на главную</h4></Link>
            <h3 className="login__title">Авторизация</h3>
            <form className="login__card">
                <input className="login__email" type="email" placeholder='Email' required/>
                <input className="login__pass" type="password" placeholder='Password' required/>
                <button>Отправить</button>
            </form>
        </div>
        
    )
}

export default AuthorizationWindow;