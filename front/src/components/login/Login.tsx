import React, { useState } from "react"
import { IUserCredentials } from "./interfaces/user-credentials.interface";
import { Logo } from "../shared/components/Logo/Logo";
import './login.css';

export const Login = () => {

    const [credentials, setCredentials] = useState<IUserCredentials>({
        email: '',
        password: '',
    });

    const handleFormChanges = (event: React.FormEvent<HTMLInputElement>): void => {
        const inputTarget = event.currentTarget;

        setCredentials(prev => ({
            ...prev,
            [inputTarget.name]: inputTarget.value,
        }))
    }

    return (
        <div className="flex flex-col gap-5 items-center justify-center h-[100vh] border">
            <Logo />
            <div className="flex flex-col gap-2 w-[300px]">
                <input
                    type="text"
                    value={credentials.email}
                    name="email"
                    onChange={handleFormChanges}
                    className="border py-2 rounded-lg pl-2"
                    placeholder="Email" />
                <input
                    type="password"
                    value={credentials.password}
                    name="password"
                    onChange={handleFormChanges}
                    className="border py-2 rounded-lg pl-2"
                    placeholder="Senha" />

                <button className="rounded-full bg-[#09b99d] text-white font-bold py-2">Entrar</button>
                <p className="text-sm text-black font-medium text-center cursor-pointer">Esqueceu a senha?</p>
            </div>
        </div>
    );
}