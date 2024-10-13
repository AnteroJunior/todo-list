import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterCredentials } from "../../interfaces/User/user-form.interfaces";
import './Register.css';
import { registerService } from "../../services/registerService";

export const Register: React.FunctionComponent = (): JSX.Element => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof RegisterCredentials>>({
        resolver: zodResolver(RegisterCredentials),
        mode: 'onChange',
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
        criteriaMode: 'firstError',
    });

    const onSubmit: SubmitHandler<z.infer<typeof RegisterCredentials>> = async (formData: z.infer<typeof RegisterCredentials>): Promise<void> => {
        const response = await registerService(formData);
        console.log(response);
        reset();
    }

    return (
        <div className="container mx-auto w-[90%] md:w-[50%] flex flex-col gap-5 justify-center h-[100vh] bg-white">
            <h1 className="text-4xl font-bold text-[#09b99d]">Create your account</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 justify-center align-center">
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input placeholder="Email" {...register('email', { required: true })} type="email" className="border py-2 rounded-lg pl-2" />
                    {errors?.email && (<p className="text-red-500 text-sm">Invalid email</p>)}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input placeholder="Name" {...register('name', { required: true })} type="text" className="border py-2 rounded-lg pl-2" />
                    {errors?.name && (<p className="text-red-500 text-sm">Invalid name</p>)}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Password</label>
                    <input placeholder="Password" {...register('password', { required: true })} type="password" className="border py-2 rounded-lg pl-2" />
                    {errors?.password && (<p className="text-red-500 text-sm">Invalid password</p>)}
                </div>
                <div className="flex flex-col gap-5 items-center justify-center">
                    <button className="rounded-full bg-[#09b99d] text-white font-bold py-2 w-[200px]">Register</button>
                    <p className="text-sm text-black font-normal">Already have an account? <a href="/" className="text-[#09b99d]">Login</a></p>
                </div>
            </form>
        </div>
    );
}