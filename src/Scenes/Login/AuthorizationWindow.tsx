import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../constans/routes";
import { AiFillHome } from "react-icons/ai";
import { Formik, Form } from "formik";
import FormikInput from "../../Components/FormikInputs/FormikInput";
import { useDispatch } from "react-redux";
import axios from "axios";
import './authorizationWindow.scss';

function AuthorizationWindow():JSX.Element {
    
    type LoginPageFormData = {
        name: string,
        email: string,
        password: string,
    }
    type LoginPageErrorsData = {
        name?: string,
        email?: string,
        password?: string,
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [successAuth, setSuccessAuth] = useState(false);
    
    const initialFormValues:LoginPageFormData = {
        name: '',
        email: '',
        password: ''
    }

    const validateForm = (formValues:LoginPageFormData):LoginPageErrorsData | void => {
        let isValid = true;
        let errorsObject: LoginPageErrorsData = {};

        if(!formValues.name) {
            isValid = false;
            errorsObject.name = "Поле не должно быть пустым!";
        }
        if(formValues.name.includes(' ')) {
            isValid = false;
            errorsObject.name = "Поле не должно содержать пробелы!";
        }
        if(formValues.name.length > 11) {
            isValid = false;
            errorsObject.name = "Имя не должно быть длиннее 11 символов";
        }
        if(!formValues.email) {
            isValid = false;
            errorsObject.email = "Поле не должно быть пустым!";
        }
        if(formValues.password.length < 5) {
            isValid = false;
            errorsObject.password = "Пороль должен содержать больше 5 символов!";
        }

        isValid = false;

        if(!isValid) return errorsObject
    }

    return (
        <div className="login__wrap">
            <Link to={PATH.initialPage} className='go-home--login'><AiFillHome className="home-icon" /></Link>
            <Formik initialValues={initialFormValues} validate={validateForm} onSubmit={(formValues) => {
                dispatch({type: 'userLogIn', payload: {name: formValues.name, password: formValues.password} });
                setSuccessAuth(true);
                axios.post('http://localhost:8000/users', {name: formValues.name, password: formValues.password})
                setTimeout(() => {
                    navigate('/');
                }, 1000); 
            }}>
                <div className="login__card-wrapper">
                    <Form className="login__card">
                        <h3 className="login__title">Авторизация</h3>
                        <FormikInput name='name' type='text' placeholder='крутойЧел228' required className="login__name" />
                        <FormikInput name='email' type='email' placeholder='vasyapupkin@gmail.com' required className="login__email" />
                        <FormikInput name='password' type='password' required className="login__pass" placeholder="пароль" />
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