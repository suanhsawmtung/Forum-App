"use client";

import { useState } from "react";
import Input from "./ui/Input";
import LockIcon from "./icons/LockIcon";
import AccountIcon from "./icons/AccountIcon";
import Button from "./ui/Button";
import WorldIcon from "./icons/WorldIcon";

const LoginForm = ({openRegisterForm}: {
    openRegisterForm: () => void
}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <form 
            action=""
            className="flex flex-col items-center gap-4 px-12 pt-6 pb-12"
        >
            <h1
                className="font-bold pb-4"
            >
                Login Form
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
            <Button 
                type="button"
                text="Login"
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
                    onClick={openRegisterForm}
                >
                    register
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

export default LoginForm;