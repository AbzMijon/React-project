import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../constans/routes";
import { AiFillHome } from "react-icons/ai";
import { Formik, Form } from "formik";
import FormikInput from "../../Components/FormikInputs/FormikInput";
import { useDispatch } from "react-redux";
import axios from "axios";
import  leaves  from "../../assets/images/leaves.png";
import { globalThemeContext } from "../../contexts/theme";
import BackgroundApp from "../../Components/BackgroundApp/BackgroundApp";
import './loginPage.scss';

function LoginPage():JSX.Element {
    
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
    const { theme, setTheme } = useContext(globalThemeContext);
    const [auth, setAuth] = useState(true);
    const [authError, setAuthError] = useState('');
    
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
            <BackgroundApp theme={theme} />
            <Link to={PATH.initialPage} className='go-home--login'><AiFillHome className="home-icon" /></Link>
            <Formik initialValues={initialFormValues} validate={validateForm} onSubmit={(formValues) => {

                axios.post(`http://localhost:8000/${auth ? 'login' : 'users'}`, {
                    name: formValues.name, 
                    email: formValues.email,
                    password: formValues.password
                }).then(() => {
                    dispatch({type: 'userLogIn', payload: {name: formValues.name, password: formValues.password} });
                    navigate('/');
                }).catch(error => error && setAuthError(error.response.data));

            }}>
                <div className="login__card-wrapper">
                    <img className="login__leaves" src={leaves} alt="" />
                    <Form className="login__card">
                        <h3 className="login__title">{auth ? 'Входим в аккаунт' : 'Создаем аккаунт'}</h3>
                        {!auth &&
                            <FormikInput name='name' type='text' placeholder='крутойЧел228' required className="login__name" />
                        }
                        <FormikInput name='email' type='email' placeholder='vasyapupkin@gmail.com' required className="login__email" />
                        <FormikInput name='password' type='password' required className="login__pass" placeholder="пароль" />
                        <div className="login__footer-card">
                            <button className="login__submit" type={"submit"}>Отправить</button>
                            <p className="login__forgot" onClick={() => setAuth(!auth)}>{auth ? 'У меня нет аккаунта' : 'У меня есть аккаунт!'}</p>
                        </div>
                    </Form>
                        {authError && <h4 className="success__auth-title">{authError}</h4>}
                </div>
            </Formik>
        </div>
    )
}

export default LoginPage;