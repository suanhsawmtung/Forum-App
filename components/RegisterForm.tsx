"use client";

import { useState } from "react";
import Input from "./ui/Input";
import LockIcon from "./icons/LockIcon";
import AccountIcon from "./icons/AccountIcon";
import Button from "./ui/Button";
import WorldIcon from "./icons/WorldIcon";

const RegisterForm = ({openLoginForm}: {
    openLoginForm: () => void
}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <form 
            action=""
            className="flex flex-col items-center gap-4 px-12 pt-6 pb-12"
        >
            <h1
                className="font-bold pb-4"
            >
                Register Form
            </h1>
            <Input 
                value={username}
                icon={<AccountIcon />}
                placeholder="Username"
                onChange={(val) => setUsername(val)}
            />
            <Input 
                value={password}
                type="password"
                icon={<LockIcon />}
                placeholder="Password"
                onChange={(val) => setPassword(val)}
            />
            <Input 
                value={confirm}
                type="password"
                icon={<LockIcon />}
                placeholder="Confirmed Password"
                onChange={(val) => setConfirm(val)}
            />
            <Button 
                type="button"
                text="Register"
                icon={<WorldIcon />}
            />
            <div className="text-start w-full flex items-center gap-1">
                <p 
                    className="text-xs font-bold"
                >
                    Don’t have an account, 
                </p>
                <p 
                    className="text-xs font-bold underline cursor-pointer"
                    onClick={openLoginForm}
                >
                    login
                </p>
                <p 
                    className="text-xs font-bold"
                >
                    ? 
                </p>
            </div>
        </form>
    );
}

export default RegisterForm;