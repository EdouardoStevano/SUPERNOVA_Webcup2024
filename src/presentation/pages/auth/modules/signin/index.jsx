import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.scss';

import mailIcon from 'presentation/assets/icons/png/icons8_email_sign_60px_1.png';
import passwordIcon from 'presentation/assets/icons/png/icons8_good_pincode_60px.png';
import doneIcon from 'presentation/assets/icons/png/icons8_ok_60px.png';
import cancelIcon from 'presentation/assets/icons/png/icons8_cancel_60px.png';
import loadIcon from 'presentation/assets/icons/png/icons8_stream_60px.png';
import showeye from 'presentation/assets/icons/svg/showEye.svg';
import hideeye from 'presentation/assets/icons/svg/hideEye.svg';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
            setRememberMe(true);
        }
    }, []);

    const handleChangeEmail = (e) => {
        const inputText = e.target.value;
        setEmail(inputText);
        setIsLoading(true);
        setTimeout(() => {
            const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
            setIsValidEmail(emailPattern.test(inputText));
            setIsLoading(false);
        }, 1000);
    };

    const handleCancelClick = () => {
        setEmail('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
        if (!event.target.checked) {
            localStorage.removeItem('email');
        }
    };

    const login = () => {
        if (rememberMe) {
            localStorage.setItem('email', email);
        }
        navigate('/explore');
        toast.success('Authentification réussie!');
    };

    return (
        <div className="SignUp MiddleContent">
            <div className="signIn-left">
                <h1>Bienvenue sur WebcupApp😊</h1>
                <span>un pas de plus vers votre avenir brillant!</span>
                <p>La porte vers l'apprentissage en ligne de demain. Connectez-vous pour explorer un univers de connaissances infini..</p>
                <div className="signForm">
                    <div className="inputform">
                        <div className="input-content">
                            <img src={mailIcon} alt="email icon" width="20px" />
                            <input
                                type="text"
                                value={email}
                                placeholder="Adresse email"
                                onChange={handleChangeEmail}
                            />
                            {isLoading && (
                                <img
                                    src={loadIcon}
                                    alt="Indicator"
                                    width="30px"
                                    className="authLoadIcon"
                                />
                            )}
                            {email && !isLoading && (
                                <img
                                    src={isValidEmail ? doneIcon : cancelIcon}
                                    alt="Indicator"
                                    width="30px"
                                    onClick={isValidEmail ? null : handleCancelClick}
                                />
                            )}
                        </div>
                    </div>
                    <div className="inputform">
                        <div className="input-content">
                            <img src={passwordIcon} alt="password icon" width="20px" />
                            <input
                                value={password}
                                onChange={handlePasswordChange}
                                type={showPass ? "text" : "password"}
                                placeholder="Mot de passe"
                            />
                            <img
                                src={showPass ? showeye : hideeye}
                                alt="done-icon"
                                width="35px"
                                className="showPassword_icon"
                                onClick={() => setShowPass(!showPass)}
                            />
                        </div>
                    </div>
                </div>
                <div className="btn-signForm">
                    <div className="remember-check">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            name="remember"
                            id="remember"
                            onChange={handleRememberMeChange}
                        />
                        <label htmlFor="remember">Se souvenir de moi</label>
                    </div>
                    <div className="passForget">
                        <Link to="/auth/password/reset" className="link-passForget">Mot de passe oublié?</Link>
                    </div>
                </div>
                <div className="btn-group">
                    <button onClick={login} type="button" className="btn-login">Se connecter</button>
                    <Link to="/auth/signup" className="btn-signUp">Créer un compte</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
