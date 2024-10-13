import React from "react"
import { Logo } from "../shared/components/Logo/Logo";
import './login.css';
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginCredentials } from "../../interfaces/User/user-form.interfaces";

export const Login: React.FunctionComponent = (): JSX.Element => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof LoginCredentials>>({
        resolver: zodResolver(LoginCredentials),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        },
        criteriaMode: 'firstError',
    });

    const onSubmit: SubmitHandler<z.infer<typeof LoginCredentials>> = (data: z.infer<typeof LoginCredentials>): void => {
        console.log(data);
        reset();
    }

    return (
        <div className="flex flex-col gap-5 items-center justify-center h-[100vh] border">
            <Logo />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-[300px]">
                <input
                    type="email"
                    className="border py-2 rounded-lg pl-2"
                    placeholder="Email"
                    {...register("email", { required: true })} />
                {errors?.email && (<p className="text-red-500 text-sm">Invalid email</p>)}
                <input
                    type="password"
                    className="border py-2 rounded-lg pl-2"
                    placeholder="Password"
                    {...register("password", { required: true })} />
                {errors?.password && (<p className="text-red-500 text-sm">At least 8 characters</p>)}

                <button className="rounded-full bg-[#09b99d] text-white font-bold py-2">Login</button>
                <p className="text-sm text-black font-medium text-center cursor-pointer">Forgot password?</p>
                <p className="text-sm text-black font-medium text-center cursor-pointer">Don't have an account? <a href="/register" className="text-[#09b99d]">Register</a></p>
            </form>
        </div>
    );
}