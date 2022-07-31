import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../constans/routes";
import { AiFillHome } from "react-icons/ai";
import { Formik, Form } from "formik";
import FormikInput from "../../Components/FormikInputs/FormikInput";
import './authorizationWindow.scss';

function AuthorizationWindow() {
    
    const [successAuth, setSuccessAuth] = useState(false);
    const navigate = useNavigate();
    const initialFormValues = {
        email: '',
        password: ''
    }
    return (
        <div className="login__wrap">
            <Link to={PATH.initialPage} className='go-home--login'><AiFillHome className="home-icon" /></Link>
            <h3 className="login__title">Авторизация</h3>
            <Formik initialValues={initialFormValues} onSubmit={(newFormikValues) => {
                setSuccessAuth(true);
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            }}>
                <Form className="login__card">
                    <FormikInput name='email' type='email' placeholder='Email' required className="login__email" />
                    <FormikInput name='password' type='password' placeholder='Password' required className="login__pass" />
                    <button className="login__submit" type={"submit"}>Отправить</button>
                    {successAuth && <h4 className="success__auth-title">Вы успешно зарегистрировались!</h4>}
                </Form>
            </Formik>
        </div>
        
    )
}

export default AuthorizationWindow;