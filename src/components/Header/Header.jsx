import React, { useState } from "react";
import Modal from "react-modal";
import DeveloperHeader from "./DeveloperHeader";
import PlayerHeader from "./PlayerHeader";
import { useNavigate } from "react-router-dom";

let typeModal = "register",
  typeUser = "account";

const Header = (props) => {
  const navigate = useNavigate();
  let styles = {
    marginBottom: "60px",
  };
  if (props.styles) Object.assign(styles, props.styles);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "#1F2630",
      padding: "30px 60px 60px 60px",
      borderRadius: "10px",
    },
  };
  const customStylesLogin = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      maxWidth: "519px",
      width: "100%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "#1F2630",
      padding: "60px 60px 32px 60px",
      borderRadius: "10px",
    },
  };
  const customStylesRegister = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      maxWidth: "519px",
      width: "100%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "#1F2630",
      padding: "60px 60px 32px 60px",
      borderRadius: "10px",
    },
  };
  const customStylesVerify = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      maxWidth: "519px",
      width: "100%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "#1F2630",
      padding: "60px 60px 32px 60px",
      borderRadius: "10px",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenLogin, setIsOpenLogin] = useState(false);
  const [modalIsOpenRegister, setIsOpenRegister] = useState(false);
  const [modalIsOpenVerify, setIsOpenVerify] = useState(false);
  Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.5)";

  function openModal() {
    setIsOpen(true);
  }
  function mainHeader() {
    return (
      <div className="container-fluid bg-app-black px-8 py-5">
        <div className="header__inner">
          <div className="header__logo cursor-pointer">
            <img src="assets/images/logo.svg" className="logo" alt="" />
          </div>
          <div className="header__group">
            <button
              className="btn"
              onClick={() => {
                typeModal = "login";
                openModal();
              }}
            >
              Log in
            </button>
            <button
              className="btn btn--brand"
              onClick={() => {
                typeModal = "register";
                openModal();
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
  function closeModal() {
    setIsOpen(false);
  }

  function openModalLogin() {
    setIsOpenLogin(true);
    closeModal();
  }

  function closeModalLogin() {
    setIsOpenLogin(false);
  }

  function openModalRegister() {
    setIsOpenRegister(true);
    closeModal();
  }

  function closeModalRegister() {
    setIsOpenRegister(false);
  }

  function openModalVerify() {
    setIsOpenVerify(true);
    closeModalRegister();
  }

  function closeModalVerify() {
    setIsOpenVerify(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal">
          <button
            onClick={closeModal}
            className="modal__close modal__close--static flex justify-center items-center"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1"
                stroke="#717A8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="modal__row">
            <div
              className="modal__box"
              onClick={() => {
                typeUser = "account";
                if (typeModal === "register") {
                  openModalRegister();
                } else {
                  openModalLogin();
                }
              }}
            >
              <img
                src="assets/images/Player.jpg"
                className="modal__img"
                alt=""
              />
              <div className="modal__name">PLAYER</div>
            </div>
            <div
              className="modal__box"
              onClick={() => {
                typeUser = "developer";
                if (typeModal === "register") {
                  openModalRegister();
                } else {
                  openModalLogin();
                }
              }}
            >
              <img
                src="assets/images/Developer.jpg"
                className="modal__img"
                alt=""
              />
              <div className="modal__name">DEVELOPER</div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={modalIsOpenLogin}
        onRequestClose={closeModalLogin}
        ariaHideApp={false}
        style={customStylesLogin}
        contentLabel="Example Modal"
      >
        <div className="modal modal-login">
          <button
            onClick={closeModalLogin}
            className="modal__close modal-login__close flex items-center justify-center"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1"
                stroke="#717A8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="modal__title">Login</div>
          <form action="" className="modal__form">
            <div className="modal__form-group">
              <div className="modal__field">
                <label htmlFor="" className="modal__label">
                  Mail
                </label>
                <input
                  type="text"
                  className="modal__input"
                  placeholder="Example@gmail.com"
                />
              </div>
              <div className="modal__field">
                <label htmlFor="" className="modal__label">
                  Password
                </label>
                <input
                  type="password"
                  className="modal__input"
                  placeholder="**************"
                />
              </div>
            </div>
            <a href={`/${typeUser}`} className="btn modal__btn">
              Login
            </a>
            {/* <button className="btn modal__btn">Login</button> */}
            <button
              className="modal__btn-forgot"
              onClick={() => {
                closeModalLogin();
                openModal();
              }}
            >
              Dont have account?
            </button>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpenRegister}
        onRequestClose={closeModalRegister}
        ariaHideApp={false}
        style={customStylesRegister}
        contentLabel="Example Modal"
      >
        <div className="modal modal-register">
          <button
            onClick={closeModalRegister}
            className="modal__close modal-login__close flex items-center justify-center"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1"
                stroke="#717A8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="modal__title">Register</div>
          <form action="#" className="modal__form">
            <div className="modal__form-group">
              <div className="modal__field">
                <label htmlFor="" className="modal__label">
                  Mail
                </label>
                <input
                  type="text"
                  className="modal__input"
                  placeholder="Example@gmail.com"
                />
              </div>
              <div className="modal__field">
                <label htmlFor="" className="modal__label">
                  Password
                </label>
                <input
                  type="password"
                  className="modal__input"
                  placeholder="**************"
                />
              </div>
            </div>
            <div className="modal__form-group">
              <div className="modal__checkbox">
                <input type="checkbox" className="modal__checkbox-input" />I
                have read an accept Pixpel terms and conditions
              </div>
              <div className="modal__checkbox">
                <input type="checkbox" className="modal__checkbox-input" />I
                want to recive marketing email
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
        ariaHideApp={false}
        style={customStylesVerify}
        contentLabel="Example Modal"
      >
        <div className="modal modal-verify">
          <button
            onClick={closeModalVerify}
            className="modal__close modal-login__close flex items-center justify-center"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7M13 13L7 7M7 7L1 13L13 1"
                stroke="#717A8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="modal__title modal-verify__title">Verify Email</div>
          <div className="modal__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ornare eros at ante viverra, at suscipit metus convallis. Nulla
            porttitor diam neque
          </div>
          <form action="" className="modal__form">
            <div className="modal__form-group">
              <div className="modal__field">
                <label htmlFor="" className="modal__label">
                  6 Didgit code
                </label>
                <input
                  type="text"
                  className="modal__input"
                  placeholder="XX-XX-XX"
                />
              </div>
            </div>
            <a href={`/${typeUser}`} className="btn modal__btn">
              Create account
            </a>
          </form>
        </div>
      </Modal>

      <header style={styles}>
        {window.location.pathname !== "/" ? (
          window.location.pathname === "/mycollection" ||
          window.location.pathname === "/developer" ||
          window.location.pathname === "/create-nft" ||
          window.location.pathname === "/collection" ||
          window.location.pathname === "/mysterybox" ||
          window.location.pathname === "/stakingportfolio" ||
          window.location.pathname === "/finishmint" ||
          window.location.pathname === "/gamelanding" ||
          window.location.pathname === "/developerwallet" ||
          window.location.pathname === "/developerprofile" ||
          window.location.pathname === "/tokenroom/mint" ||
          window.location.pathname === "/tokenroom/burn" ||
          window.location.pathname === "/tokenroom" ? (
            <DeveloperHeader />
          ) : (
            <PlayerHeader />
          )
        ) : (
          mainHeader()
        )}
      </header>
    </>
  );
};

export default Header;
