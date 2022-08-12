import React from "react";
import { Menu} from "../index";
import Modal from "react-modal";

let typeModal = 'register',
    typeUser = 'account'
const Header = (props) => {
    let styles = {
        marginBottom: '60px'
    }
    if (props.styles) Object.assign(styles, props.styles)
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: '#1F2630',
            padding: '30px 60px 60px 60px',
            borderRadius: '10px'
        },
    };
    const customStylesLogin = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            maxWidth: '519px',
            width: '100%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: '#1F2630',
            padding: '60px 60px 32px 60px',
            borderRadius: '10px'
        },
    };
    const customStylesRegister = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            maxWidth: '519px',
            width: '100%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: '#1F2630',
            padding: '60px 60px 32px 60px',
            borderRadius: '10px'
        },
    };
    const customStylesVerify = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            maxWidth: '519px',
            width: '100%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: '#1F2630',
            padding: '60px 60px 32px 60px',
            borderRadius: '10px'
        },
    };
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpenLogin, setIsOpenLogin] = React.useState(false);
    const [modalIsOpenRegister, setIsOpenRegister] = React.useState(false);
    const [modalIsOpenVerify, setIsOpenVerify] = React.useState(false);
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    function openModal() {
        setIsOpen(true);
    }
    function mainHeader () {
        return (
            <div className="container-fluid">
                <div className="header__inner">
                    <div className="header__logo">
                        <img src="assets/images/logo.svg" className="logo" alt=""/>
                    </div>
                    <Menu/>
                    <div className="header__group">
                        <button className="btn" onClick={() => {
                            typeModal = 'login'
                            openModal()
                        }}>Log in
                        </button>
                        <button className="btn btn--brand" onClick={() => {
                            typeModal = 'register'
                            openModal()
                        }}>Register
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    function userHeader () {
        return (
            <div className="container-fluid">
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="/"><img src="assets/images/logo.svg" className="logo" alt=""/></a>
                    </div>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="/nft-market" className="menu__link">
                                    Market
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/stacking" className="menu__link">
                                    Staking
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/trade" className="menu__link">
                                    Trade
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/swap-master" className="menu__link">
                                    Buy crypto
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <a href="" className="header__btn-user">
                        Player
                    </a>
                    <div className="header__group">
                        <div className="header__user-tools">
                            <a href="" className="header__link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                                        stroke="#717A8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                                        stroke="#717A8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                                        stroke="#717A8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href="" className="header__link">
                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.1245 7.44981C17.1245 5.73922 16.445 4.09868 15.2354 2.88911C14.0259 1.67953 12.3853 1 10.6747 1C8.96412 1 7.32359 1.67953 6.11401 2.88911C4.90444 4.09868 4.22491 5.73922 4.22491 7.44981C4.22491 14.9746 1 17.1245 1 17.1245H20.3494C20.3494 17.1245 17.1245 14.9746 17.1245 7.44981Z"
                                        stroke="#717A8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M12.5358 21.4243C12.3468 21.7501 12.0755 22.0205 11.7492 22.2085C11.4228 22.3965 11.0527 22.4955 10.6761 22.4955C10.2995 22.4955 9.92942 22.3965 9.60304 22.2085C9.27666 22.0205 9.0054 21.7501 8.81641 21.4243"
                                        stroke="#717A8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </a>
                            <a href="" className="header__link">
                                <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.34766" y="1" width="24" height="19" rx="2" stroke="#717A8B" strokeWidth="2"/>
                                    <line x1="1.34766" y1="8" x2="25.3477" y2="8" stroke="#717A8B" strokeWidth="2"/>
                                    <circle cx="13.3477" cy="8" r="2.5" fill="#29313C" stroke="#717A8B"/>
                                    <line x1="20.8477" y1="0.5" x2="20.8477" y2="20.5" stroke="#717A8B" strokeLinecap="round"
                                          strokeDasharray="3 3"/>
                                    <line x1="5.84766" y1="0.5" x2="5.84766" y2="20.5" stroke="#717A8B" strokeLinecap="round"
                                          strokeDasharray="3 3"/>
                                    <path
                                        d="M13.3477 17V15M13.3477 15V15C12.7954 15 12.3477 14.5523 12.3477 14V14C12.3477 13.4477 12.7954 13 13.3477 13V13C13.8999 13 14.3477 13.4477 14.3477 14V14C14.3477 14.5523 13.8999 15 13.3477 15V15Z"
                                        stroke="#717A8B" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </a>
                            <a href="" className="header__link">
                                <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.18538 4.80102H9.69194L7.83464 5.67158H4.27809C3.8051 5.67158 3.42573 6.05096 3.42573 6.52394C3.42573 6.93005 3.81662 7.29835 4.27809 7.29835H23.4827V9.33348C23.4827 9.63809 23.238 9.89474 22.9857 9.96474L21.2107 10.042C20.4337 10.042 19.6028 10.0795 18.9646 10.3781C18.6408 10.5295 18.3625 10.7498 18.1663 11.0681C17.9706 11.3859 17.8636 11.7903 17.8636 12.2992V15.1868C17.8636 16.5147 18.8638 17.5219 20.1208 17.5219H22.7743C23.1598 17.5219 23.4828 17.8451 23.4828 18.2305V22.0546C23.4828 22.4401 23.1596 22.7631 22.7743 22.7631H3.18538C2.79986 22.7631 2.47686 22.4399 2.47686 22.0546V5.50954C2.47686 5.12402 2.79999 4.80102 3.18538 4.80102ZM19.2537 5.67157H11.581L17.7889 2.74204L19.2537 5.67157ZM20.6046 4.80084H22.774C23.1595 4.80084 23.4825 5.12397 23.4825 5.50936V5.67157H21.0691L20.6046 4.80084ZM19.8243 3.17423L18.9288 1.30851L18.9288 1.3085L18.9277 1.30631C18.7396 0.930137 18.2649 0.730015 17.8698 0.926112L13.0632 3.17444H3.18513C1.93172 3.17444 0.85 4.25616 0.85 5.50957V22.0546C0.85 23.3151 1.93888 24.3118 3.18513 24.3118H22.774C24.0276 24.3118 25.0312 23.308 25.0312 22.0546V18.2305L25.0312 18.2081C25.0313 17.9922 25.0314 17.7455 24.9602 17.522H25.1934C26.4468 17.522 27.5285 16.4402 27.5285 15.1868V12.2992C27.5285 11.0386 26.4396 10.042 25.1934 10.042H24.9498C25.0312 9.79642 25.0312 9.58237 25.0312 9.34019V9.33347V5.50936C25.0312 4.2631 24.0344 3.17423 22.774 3.17423H19.8243ZM20.1207 11.6687H25.1935C25.5985 11.6687 25.902 11.932 25.902 12.2991V15.1868C25.902 15.5723 25.5789 15.8953 25.1935 15.8953H20.1207C19.7535 15.8953 19.4903 15.5916 19.4903 15.1868V12.2991C19.4903 12.0991 19.5563 11.9441 19.661 11.8394C19.7656 11.7348 19.9207 11.6687 20.1207 11.6687Z"
                                        fill="#717A8B" stroke="#717A8B" strokeWidth="0.3"/>
                                    <path
                                        d="M21.6825 14.9467C22.3256 14.9467 22.8471 14.4252 22.8471 13.7821C22.8471 13.1389 22.3256 12.6176 21.6825 12.6176C21.0393 12.6176 20.518 13.1389 20.518 13.7821C20.518 14.4252 21.0393 14.9467 21.6825 14.9467Z"
                                        fill="#717A8B" stroke="#717A8B" strokeWidth="0.3"/>
                                </svg>

                            </a>
                            <a href="" className="header__link">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.3387 26.2903V24.4355C22.3387 23.4516 21.9479 22.5081 21.2522 21.8124C20.5565 21.1167 19.6129 20.7258 18.629 20.7258H11.2097C10.2258 20.7258 9.28224 21.1167 8.58654 21.8124C7.89084 22.5081 7.5 23.4516 7.5 24.4355V26.2903"
                                        stroke="#717A8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M14.9206 17.0162C16.9694 17.0162 18.6303 15.3553 18.6303 13.3065C18.6303 11.2577 16.9694 9.5968 14.9206 9.5968C12.8718 9.5968 11.2109 11.2577 11.2109 13.3065C11.2109 15.3553 12.8718 17.0162 14.9206 17.0162Z"
                                        stroke="#717A8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="15" cy="15" r="14" stroke="#717A8B" strokeWidth="2"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    function devHeader () {
        return (
            <div className="container-fluid">
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="/"><img src="assets/images/logo.svg" className="logo" alt=""/></a>
                    </div>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="/buy-crypto" className="menu__link">
                                    Games
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/nft-market" className="menu__link">
                                    NFT
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/trade" className="menu__link">
                                    Token
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/stacking" className="menu__link">
                                    Staking
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <a href="" className="header__btn-user">
                        Developer
                    </a>
                    <div className="header__group">
                        <div className="header__user-tools">

                            <a href="" className="header__link">
                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.1245 7.44981C17.1245 5.73922 16.445 4.09868 15.2354 2.88911C14.0259 1.67953 12.3853 1 10.6747 1C8.96412 1 7.32359 1.67953 6.11401 2.88911C4.90444 4.09868 4.22491 5.73922 4.22491 7.44981C4.22491 14.9746 1 17.1245 1 17.1245H20.3494C20.3494 17.1245 17.1245 14.9746 17.1245 7.44981Z"
                                        stroke="#717A8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M12.5358 21.4243C12.3468 21.7501 12.0755 22.0205 11.7492 22.2085C11.4228 22.3965 11.0527 22.4955 10.6761 22.4955C10.2995 22.4955 9.92942 22.3965 9.60304 22.2085C9.27666 22.0205 9.0054 21.7501 8.81641 21.4243"
                                        stroke="#717A8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </a>
                            <a href="" className="header__link">
                                <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.18538 4.80102H9.69194L7.83464 5.67158H4.27809C3.8051 5.67158 3.42573 6.05096 3.42573 6.52394C3.42573 6.93005 3.81662 7.29835 4.27809 7.29835H23.4827V9.33348C23.4827 9.63809 23.238 9.89474 22.9857 9.96474L21.2107 10.042C20.4337 10.042 19.6028 10.0795 18.9646 10.3781C18.6408 10.5295 18.3625 10.7498 18.1663 11.0681C17.9706 11.3859 17.8636 11.7903 17.8636 12.2992V15.1868C17.8636 16.5147 18.8638 17.5219 20.1208 17.5219H22.7743C23.1598 17.5219 23.4828 17.8451 23.4828 18.2305V22.0546C23.4828 22.4401 23.1596 22.7631 22.7743 22.7631H3.18538C2.79986 22.7631 2.47686 22.4399 2.47686 22.0546V5.50954C2.47686 5.12402 2.79999 4.80102 3.18538 4.80102ZM19.2537 5.67157H11.581L17.7889 2.74204L19.2537 5.67157ZM20.6046 4.80084H22.774C23.1595 4.80084 23.4825 5.12397 23.4825 5.50936V5.67157H21.0691L20.6046 4.80084ZM19.8243 3.17423L18.9288 1.30851L18.9288 1.3085L18.9277 1.30631C18.7396 0.930137 18.2649 0.730015 17.8698 0.926112L13.0632 3.17444H3.18513C1.93172 3.17444 0.85 4.25616 0.85 5.50957V22.0546C0.85 23.3151 1.93888 24.3118 3.18513 24.3118H22.774C24.0276 24.3118 25.0312 23.308 25.0312 22.0546V18.2305L25.0312 18.2081C25.0313 17.9922 25.0314 17.7455 24.9602 17.522H25.1934C26.4468 17.522 27.5285 16.4402 27.5285 15.1868V12.2992C27.5285 11.0386 26.4396 10.042 25.1934 10.042H24.9498C25.0312 9.79642 25.0312 9.58237 25.0312 9.34019V9.33347V5.50936C25.0312 4.2631 24.0344 3.17423 22.774 3.17423H19.8243ZM20.1207 11.6687H25.1935C25.5985 11.6687 25.902 11.932 25.902 12.2991V15.1868C25.902 15.5723 25.5789 15.8953 25.1935 15.8953H20.1207C19.7535 15.8953 19.4903 15.5916 19.4903 15.1868V12.2991C19.4903 12.0991 19.5563 11.9441 19.661 11.8394C19.7656 11.7348 19.9207 11.6687 20.1207 11.6687Z"
                                        fill="#717A8B" stroke="#717A8B" strokeWidth="0.3"/>
                                    <path
                                        d="M21.6825 14.9467C22.3256 14.9467 22.8471 14.4252 22.8471 13.7821C22.8471 13.1389 22.3256 12.6176 21.6825 12.6176C21.0393 12.6176 20.518 13.1389 20.518 13.7821C20.518 14.4252 21.0393 14.9467 21.6825 14.9467Z"
                                        fill="#717A8B" stroke="#717A8B" strokeWidth="0.3"/>
                                </svg>

                            </a>
                            <a href="" className="header__link">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.3387 26.2903V24.4355C22.3387 23.4516 21.9479 22.5081 21.2522 21.8124C20.5565 21.1167 19.6129 20.7258 18.629 20.7258H11.2097C10.2258 20.7258 9.28224 21.1167 8.58654 21.8124C7.89084 22.5081 7.5 23.4516 7.5 24.4355V26.2903"
                                        stroke="#717A8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M14.9206 17.0162C16.9694 17.0162 18.6303 15.3553 18.6303 13.3065C18.6303 11.2577 16.9694 9.5968 14.9206 9.5968C12.8718 9.5968 11.2109 11.2577 11.2109 13.3065C11.2109 15.3553 12.8718 17.0162 14.9206 17.0162Z"
                                        stroke="#717A8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="15" cy="15" r="14" stroke="#717A8B" strokeWidth="2"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    function closeModal() {
        setIsOpen(false);
    }

    function openModalLogin() {
        setIsOpenLogin(true);
        closeModal()

    }

    function closeModalLogin() {
        setIsOpenLogin(false);
    }

    function openModalRegister() {
        setIsOpenRegister(true);
        closeModal()

    }

    function closeModalRegister() {
        setIsOpenRegister(false);
    }

    function openModalVerify() {
        setIsOpenVerify(true);
        closeModalRegister()
    }

    function closeModalVerify() {
        setIsOpenVerify(false);
    }

    return (<>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className="modal">
                    <button onClick={closeModal} className="modal__close modal__close--static">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1" stroke="#717A8B" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className="modal__row">
                        <div className="modal__box" onClick={() => {
                            typeUser = 'account'
                            if (typeModal === 'register') {
                                openModalRegister()
                            } else {
                                openModalLogin()
                            }
                        }}>
                            <img src="assets/images/Player.jpg" className="modal__img" alt=""/>
                            <div className="modal__name">
                                PLAYER
                            </div>
                        </div>
                        <div className="modal__box" onClick={() => {
                            typeUser = 'devops'
                            if (typeModal === 'register') {
                                openModalRegister()
                            } else {
                                openModalLogin()
                            }
                        }}>
                            <img src="assets/images/Developer.jpg" className="modal__img" alt=""/>
                            <div className="modal__name">
                                DEVELOPER
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={modalIsOpenLogin}
                onRequestClose={closeModalLogin}
                style={customStylesLogin}
                contentLabel="Example Modal"
            >

                <div className="modal modal-login">
                    <button onClick={closeModalLogin} className="modal__close modal-login__close">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1" stroke="#717A8B" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className="modal__title">
                        Login
                    </div>
                    <form action="" className="modal__form">
                        <div className="modal__form-group">
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">Mail</label>
                                <input type="text" className="modal__input" placeholder="Example@gmail.com"/>
                            </div>
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">Password</label>
                                <input type="password" className="modal__input" placeholder="**************"/>
                            </div>
                        </div>
                        <button className="btn modal__btn">
                            Login
                        </button>
                        <button className="modal__btn-forgot" onClick={() => {
                            closeModalLogin();
                            openModal()
                        }}>Dont have account?
                        </button>
                    </form>
                </div>
            </Modal>
            <Modal
                isOpen={modalIsOpenRegister}
                onRequestClose={closeModalRegister}
                style={customStylesRegister}
                contentLabel="Example Modal"
            >

                <div className="modal modal-register">
                    <button onClick={closeModalRegister} className="modal__close modal-login__close">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1" stroke="#717A8B" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className="modal__title">
                        Register
                    </div>
                    <form action="#" className="modal__form">
                        <div className="modal__form-group">
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">Mail</label>
                                <input type="text" className="modal__input" placeholder="Example@gmail.com"/>
                            </div>
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">Password</label>
                                <input type="password" className="modal__input" placeholder="**************"/>
                            </div>
                        </div>
                        <div className="modal__form-group">
                            <div className="modal__checkbox">
                                <input type="checkbox" className="modal__checkbox-input"/>
                                I have read an accept Pixpel terms and conditions
                            </div>
                            <div className="modal__checkbox">
                                <input type="checkbox" className="modal__checkbox-input"/>
                                I want to recive marketing email
                            </div>
                        </div>

                        <button className=" modal__btn" onClick={openModalVerify}>
                            Create account
                        </button>
                    </form>
                </div>
            </Modal>


            <Modal
                isOpen={modalIsOpenVerify}
                onRequestClose={closeModalVerify}
                style={customStylesVerify}
                contentLabel="Example Modal"
            >

                <div className="modal modal-verify">
                    <button onClick={closeModalVerify} className="modal__close modal-login__close">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1" stroke="#717A8B" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className="modal__title modal-verify__title">
                        Verify Email
                    </div>
                    <div className="modal__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare eros at ante viverra, at
                        suscipit metus convallis. Nulla porttitor diam neque
                    </div>
                    <form action="" className="modal__form">
                        <div className="modal__form-group">
                            <div className="modal__field">
                                <label htmlFor="" className="modal__label">6 Didgit code</label>
                                <input type="text" className="modal__input" placeholder="XX-XX-XX"/>
                            </div>
                        </div>


                        <a href={`/${typeUser}`} className="btn modal__btn">
                            Create account
                        </a>
                    </form>
                </div>
            </Modal>


            <header className="header" style={styles}>
                {window.location.pathname === '/account' ? userHeader() : window.location.pathname === '/devops' ? devHeader() : mainHeader() }
            </header>
        </>

    )
}

export default Header