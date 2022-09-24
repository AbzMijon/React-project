import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import LoginFormikInput from '@src/Components/FormikInputs/LoginFormikInput';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import  leaves  from '@src/assets/images/leaves.png';
import { fetchUsers } from '@src/api/userApi';
import './loginPage.scss';

function LoginPage():JSX.Element {
    
    type LoginPageFormData = {
        name: string,
        email: string,
        password: string,
        id: string | number,
    }
    type LoginPageErrorsData = {
        name?: string,
        email?: string,
        password?: string,
    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [auth, setAuth] = useState(true);
    const [authError, setAuthError] = useState('');
    
    const initialFormValues:LoginPageFormData = {
        name: '',
        email: '',
        password: '',
        id: Math.round(Math.random() * 1000),
    }
    
    const validateForm = (formValues:LoginPageFormData):LoginPageErrorsData | void => {
        let isValid = true;
        let errorsObject: LoginPageErrorsData = {};

        if(!formValues.name && !auth) {
            isValid = false;
            errorsObject.name = 'Поле не должно быть пустым!';
        }
        if(formValues.name.includes(' ')) {
            isValid = false;
            errorsObject.name = 'Поле не должно содержать пробелы!';
        }
        if(formValues.name.length > 11) {
            isValid = false;
            errorsObject.name = 'Имя не должно быть длиннее 11 символов';
        }
        if(!formValues.email) {
            isValid = false;
            errorsObject.email = 'Поле не должно быть пустым!';
        }
        if(formValues.password.length < 5) {
            isValid = false;
            errorsObject.password = 'Пароль должен содержать больше 5 символов!';
        }

        isValid = false;

        if(!isValid) return errorsObject
    }

    return (
        <React.Fragment>
            <Formik initialValues={initialFormValues} validate={validateForm} onSubmit={(formValues: { name: string; email: string; password: string; id: string | number;}) => {
                
                axios.post(`http://localhost:8000/${auth ? 'login' : 'users'}`,  {
                    name: formValues.name, 
                    email: formValues.email,
                    password: formValues.password,
                    likedBooks: [],
                    id: formValues.id,
                }).then(() => {
                    fetchUsers().then(response => {
                        const findUser = response.data.find((mail: { email: string; }) => mail.email === formValues.email);
                        dispatch({type: 'userLogIn', payload: {name: auth ? findUser.name : formValues.name, password: formValues.password, id: auth ? findUser.id : formValues.id}});
                        navigate('/');
                    }) 
                }).catch(error => error && setAuthError(error.response.data));
                
            }}>
                <div className='login__card-wrapper'>
                    <img src={leaves} alt='' className='login__leaves' />
                    <h3 className='login__title'>{auth ? 'Входим в аккаунт' : 'Создаем аккаунт'}</h3>
                    <Form className='login__card'>
                        {!auth && <LoginFormikInput name='name' type='text' placeholder='крутойЧел228' required className='login__name' />}
                        <LoginFormikInput name='email' type='email' placeholder='vasyapupkin@gmail.com' required className='login__email' />
                        <LoginFormikInput name='password' type='password' required className='login__pass' placeholder='пароль' />
                        <div className='login__footer-card'>
                            <button className='login__submit' type={'submit'}>{auth ? 'Войти' : 'Создать'}</button>
                            <p className='login__forgot' onClick={() => setAuth(!auth)}>{auth ? 'У меня нет аккаунта!' : 'У меня есть аккаунт!'}</p>
                        </div>
                    </Form>
                        {authError && <h4 className='success__auth-title'>{authError}</h4>}
                </div>
            </Formik>
        </React.Fragment>
    )
}

export default LoginPage;