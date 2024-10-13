import { z } from "zod";

// ZOD Schemas
export const RegisterCredentials = z.object({
    name: z.string().min(3, { message: "Nome inválido" }).regex(/[\w]/),
    email: z.string().email({ message: "Email inválido" }),
    password: z.string().min(8, { message: "Senha inválida" }),
});

export const LoginCredentials = z.object({
    email: z.string().email({ message: "Email inválido" }),
    password: z.string().min(8, { message: "Senha inválida" }),
});