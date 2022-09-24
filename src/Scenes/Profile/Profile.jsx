import React, { useState } from 'react';

import { FaUserAlt } from 'react-icons/fa';

import { PATH } from '@src/constans/routes.ts';
import { useNavigate } from 'react-router-dom';
import { loggedUserName } from '@src/store/selectors/userSelectors';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Formik, Form } from 'formik';
import { fetchUsers } from '@src/api/userApi';
import { randomInteger } from '@src/helpers/randomNumber';
import ProfileFormikInput from '@src/Components/FormikInputs/ProfileFormikInput';
import axios from 'axios';
import './profile.scss';

function Profile() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userName = useSelector(loggedUserName);
    const [handleChangeName, setHandleChangeName] = useState(false);
    const [handleChangePassword, setHandleChangePassword] = useState(false);

    const logOut = () => {
        dispatch({type: 'userLogOut'});
        navigate(PATH.initialPage);
    }

    const validateForm = (formValues) => {
        let isPassed = true;
        let errorsObject = {}; 

        if(handleChangeName && !formValues.changeName) {
            isPassed = false;
            errorsObject.changeName = 'Поле не должно быть пустым!';
        }
        if(handleChangePassword && !formValues.changePass) {
            isPassed = false;
            errorsObject.changePass = 'Поле не должно быть пустым!';
        }
        if(handleChangeName && formValues.changeName.length > 11) {
            isPassed = false;
            errorsObject.changeName = 'Имя не должно быть длиннее 11 символов';
        }

        isPassed = false;

        if(!isPassed) return errorsObject
    }

    let initialNameFormValues = {
        changeName: '',
    }
    let initialPasswordFormValues = {
        changePass: '',
    }

    return (
        <React.Fragment>
                <div className='profile__wrap'>
                    <FaUserAlt className='profile__icon' />
                    <h2 className='profile__username'>{userName}</h2>
                    <div className='profile__liked-books'></div>
                    <ul className='profile__menu'>
                        <li className='profile__item' onClick={() => navigate(PATH.bookPage(randomInteger(1, 9)))}>Посоветуйте мне книгу!</li>

                    <Formik initialValues={initialNameFormValues} validate={validateForm} onSubmit={(formValues) => {
                        fetchUsers().then(response => {
                            const findThisUser = response.data.find(user => user.name === userName);
                            axios.patch(`http://localhost:8000/users/${findThisUser.id}`, {
                                name: formValues.changeName,
                            })
                        })
                        logOut();
                    }}>
                        <Form>
                            <li onClick={() => setHandleChangeName(!handleChangeName)} className='profile__item'>Сменить имя</li>
                                <div className={handleChangeName ? 'profile__change' : 'profile__change--default'}>
                                    <ProfileFormikInput name='changeName' type='text' placeholder='Новое имя' required className='profile__change--login' />
                                    <button type='submit'>Сохранить</button>
                                </div>
                                {!handleChangeName &&
                                    <p className='logout__text'>!!!ОСТОРОЖНО, ПРИ ИЗМЕНЕНИИ ИМЕНИ ИЛИ ПАРОЛЯ ВАМ ПРИДЕТЬСЯ ПЕРЕЗАЙТИ В АККАУНТ!!!</p>
                                }
                        </Form>
                    </Formik>
                    <Formik initialValues={initialPasswordFormValues} validate={validateForm} onSubmit={(formValues) => {
                        fetchUsers().then(response => {
                            const findThisUser = response.data.find(user => user.name === userName);
                            axios.patch(`http://localhost:8000/users/${findThisUser.id}`, {
                                password: formValues.changePass,
                            })
                        })
                        logOut();
                    }}>
                        <Form>
                            <li onClick={() => setHandleChangePassword(!handleChangePassword)} className='profile__item'>Сменить пароль</li>
                                <div className={handleChangePassword ? 'profile__change' : 'profile__change--default'}>
                                    <ProfileFormikInput name='changePass' type='password' placeholder='Новый пороль' required className='profile__change--pass' />
                                    <button type='submit'>Сохранить</button>
                                </div>
                                {!handleChangePassword &&
                                    <p className='logout__text'>!!!ОСТОРОЖНО, ПРИ ИЗМЕНЕНИИ ИМЕНИ ИЛИ ПАРОЛЯ ВАМ ПРИДЕТЬСЯ ПЕРЕЗАЙТИ В АККАУНТ!!!</p>
                                }
                        </Form>
                    </Formik>

                        <li className='profile__item' onClick={logOut}>Я хочу выйти с аккаунта!</li>
                        <li className='profile__item'><a target='_blank' href='https://t.me/Abz_mijon'>Хочу написать разработчику сайта</a></li>
                    </ul>
                </div>
        </React.Fragment>
    )
}

export default Profile;