"use client";

import { useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const TopNav = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const openRegisterForm = () => {
        setShowLoginModal(false);
        setShowRegisterModal(true);
    }

    const openLoginForm = () => {
        setShowRegisterModal(false);
        setShowLoginModal(true);
    }

    return (
        <div className="fixed top-0 left-0 w-full h-20 bg-primary z-30">
            <div className="flex justify-between items-center w-full h-full container">
                <div className="w-20 h-14 bg-muted"></div>
                <div className="relative w-72 h-10 rounded-md overflow-hidden">
                    <div className="absolute top-0 left-0 flex justify-center items-center w-8 h-full">
                        <SearchIcon />
                    </div>
                    <input 
                        type="text" 
                        className="w-full h-full px-8 py-2 text-xs outline-none" 
                        placeholder="Search for topic"
                    />
                </div>
                <div className="flex gap-10 justify-center items-center">
                    <button 
                        type="button"
                        onClick={() => setShowLoginModal(!showLoginModal)}
                        className="w-24 h-10 bg-secondary font-bold text-white rounded-md"
                    >
                        Login
                    </button>
                    <div className="w-10 h-10 rounded-full bg-muted"></div>
                </div>
            </div>
            {showLoginModal && createPortal(
                <Modal onClose={() => setShowLoginModal(false)}>
                    <LoginForm 
                        openRegisterForm={openRegisterForm}
                    />
                </Modal>,
                document.body
            )}
            {showRegisterModal && createPortal(
                <Modal onClose={() => setShowRegisterModal(false)}>
                    <RegisterForm 
                        openLoginForm={openLoginForm}
                    />
                </Modal>,
                document.body
            )}
        </div>
    )
  }
  
  export default TopNav;
  