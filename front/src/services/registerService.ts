import { z } from "zod";
import { RegisterCredentials } from "../interfaces/User/user-form.interfaces";
import axios from "axios";
import { IUser } from "../interfaces/User/user.interface";

export const registerService = async (formData: z.infer<typeof RegisterCredentials>): Promise<{ 'message': string; 'user': Partial<IUser> }> => {
    const url: string = import.meta.env.VITE_API_URL;
    return axios.post(`${url}/register`, formData);
}