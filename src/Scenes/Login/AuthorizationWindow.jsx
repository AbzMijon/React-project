import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../constans/routes";
import { AiFillHome } from "react-icons/ai";
import { Formik, Form } from "formik";
import FormikInput from "../../Components/FormikInputs/FormikInput";
import { useDispatch } from "react-redux";
import './authorizationWindow.scss';

function AuthorizationWindow() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [successAuth, setSuccessAuth] = useState(false);
    const initialFormValues = {
        Имя: '',
        Почта: '',
        Пароль: ''
    }

    const validateForm = (formValues) => {
        let isValid = true;
        let errorsObject = {};

        if(!formValues.Имя) {
            isValid = false;
            errorsObject.Имя = "Поле не должно быть пустым!";
        }
        if(formValues.Имя.includes(' ')) {
            isValid = false;
            errorsObject.Имя = "Поле не должно содержать пробелы!";
        }
        if(formValues.Имя.length > 11) {
            isValid = false;
            errorsObject.Имя = "Имя не должно быть длиннее 11 символов";
        }
        if(!formValues.Почта) {
            isValid = false;
            errorsObject.Почта = "Поле не должно быть пустым!";
        }
        if(formValues.Пароль.length < 5) {
            isValid = false;
            errorsObject.Пароль = "Пороль должен содержать больше 5 символов!";
        }

        isValid = false;

        if(!isValid) return errorsObject
    }

    return (
        <div className="login__wrap">
            <Link to={PATH.initialPage} className='go-home--login'><AiFillHome className="home-icon" /></Link>
            <Formik initialValues={initialFormValues} validate={validateForm} onSubmit={(formValues) => {
                dispatch({type: 'userLogIn', payload: {name: formValues.Имя, password: formValues.Пароль} });
                setSuccessAuth(true);
                setTimeout(() => {
                    navigate('/');
                }, 1000); 
            }}>
                <div className="login__card-wrapper">
                    <Form className="login__card">
                        <h3 className="login__title">Авторизация</h3>
                        <FormikInput name='Имя' type='text' placeholder='крутойЧел228' required className="login__name" />
                        <FormikInput name='Почта' type='email' placeholder='vasyapupkin@gmail.com' required className="login__email" />
                        <FormikInput name='Пароль' type='password' required className="login__pass" placeholder="пароль" />
                        <div className="login__footer-card">
                            <button className="login__submit" type={"submit"}>Отправить</button>
                            <p className="login__forgot">У меня есть аккаунт!</p>
                        </div>
                    </Form>
                        {successAuth && <h4 className="success__auth-title">Вы успешно зарегистрировались!</h4>}
                </div>
            </Formik>
        </div>
    )
}

export default AuthorizationWindow;