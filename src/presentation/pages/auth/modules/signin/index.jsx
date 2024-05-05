import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.scss';
import hoverSound from 'presentation/assets/audio/clicked.wav';
import clickSound from 'presentation/assets/audio/clicked.wav';

import mailIcon from 'presentation/assets/icons/png/icons8_email_sign_60px_1.png';
import passwordIcon from 'presentation/assets/icons/png/icons8_good_pincode_60px.png';
import doneIcon from 'presentation/assets/icons/png/icons8_ok_60px.png';
import cancelIcon from 'presentation/assets/icons/png/icons8_cancel_60px.png';
import loadIcon from 'presentation/assets/icons/png/icons8_stream_60px.png';
import showeye from 'presentation/assets/icons/svg/showEye.svg';
import hideeye from 'presentation/assets/icons/svg/hideEye.svg';
import SignInImage from 'presentation/assets/image/branding/SignIn2.webp';

// Import du JSON des agents
import { UserAgent } from 'data/datasource/faker/userAgent';

const SignIn = () => {
    const [hovered, setHovered] = useState(false);
    const [codeAgent, setCodeAgent] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isValidCodeAgent, setIsValidCodeAgent] = useState(false);
    const [errorMessages, setErrorMessages] = useState({
        codeAgent: '',
        password: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const storedCodeAgent = localStorage.getItem('codeAgent');
        if (storedCodeAgent) {
            setCodeAgent(storedCodeAgent);
            setRememberMe(true);
        }
    }, []);

    const handleChangeCodeAgent = (e) => {
        const inputText = e.target.value;
        setCodeAgent(inputText);
        setIsLoading(true);
        setTimeout(() => {
            const codeAgentPattern = /^00\d*$/;
            setIsValidCodeAgent(codeAgentPattern.test(inputText));
            setIsLoading(false);
        }, 1000);
    };

    const handleCancelClick = () => {
        setCodeAgent('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
        if (!event.target.checked) {
            localStorage.removeItem('codeAgent');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            login();
        }
    };

    const login = () => {
        let isValid = true;
        const errors = {
            codeAgent: '',
            password: ''
        };

        if (!codeAgent) {
            errors.codeAgent = 'Le code de l\'agent est requis';
            isValid = false;
        }
        if (!password) {
            errors.password = 'Le mot de passe est requis';
            isValid = false;
        }

        setErrorMessages(errors);

        if (isValid) {
            
            // Vérification si le code de l'agent est valide
            const agent = UserAgent.find(agent => agent.code_agent === codeAgent && agent.password === password);
            if (agent) {
                const userInformation = JSON.stringify(agent);
                localStorage.setItem('config', userInformation);
                localStorage.setItem('newconnect', true);
                if (rememberMe) {
                    localStorage.setItem('codeAgent', codeAgent);
                }
                navigate('/dashboard');
                toast.success('Authentification réussie!');
            } else {
                toast.error('Code de l\'agent ou mot de passe invalide');
            }
        }
    };

    const playHoverSound = () => {
        const hoverAudio = new Audio(hoverSound);
        hoverAudio.play().catch(error => {
            console.error('Erreur lors de la lecture du son de survol :', error);
        });
    };

    const playClickSound = () => {
        const clickAudio = new Audio(clickSound);
        clickAudio.play().catch(error => {
            console.error('Erreur lors de la lecture du son de clic :', error);
        });
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
                                value={codeAgent}
                                placeholder="Code Agent (00****)"
                                onChange={handleChangeCodeAgent}
                                onKeyPress={handleKeyPress}
                            />
                            {isLoading && (
                                <img
                                    src={loadIcon}
                                    alt="Indicator"
                                    width="30px"
                                    className="authLoadIcon"
                                />
                            )}
                            {codeAgent && !isLoading && (
                                <img
                                    src={isValidCodeAgent ? doneIcon : cancelIcon}
                                    alt="Indicator"
                                    width="30px"
                                    onClick={isValidCodeAgent ? null : handleCancelClick}
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
                                onKeyPress={handleKeyPress}
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
                {errorMessages.codeAgent && <p className="error-message">{errorMessages.codeAgent}</p>}
                {errorMessages.password && <p className="error-message">{errorMessages.password}</p>}
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
                    <button
                        onMouseEnter={() => {
                            setHovered(true);
                            playHoverSound();
                        }}
                        onClick={login}
                        type="button" className="btn-login">
                        Se connecter
                    </button>
                    <Link
                        onMouseEnter={() => {
                            setHovered(true);
                            playHoverSound();
                        }}
                        to="/auth/signup"
                        className="btn-signUp">
                        Devenir agent
                    </Link>
                </div>
            </div>

            <div className="signIn-right">
                <img src={SignInImage} alt={"SignUp Illustration"} width={'500px'} />
            </div>
        </div>
    );
};

export default SignIn;
