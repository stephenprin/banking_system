import { z } from "zod";

export const AuthFormSchema 
= (type:string)=>z.object({
    email: z.string().email(),
    password: z.string().min(8),
    firstName:type==='sign-in'?z.string().optional(): z.string().min(3),
    lastName:type==='sign-in'?z.string().optional(): z.string().min(3),
    address1:type==='sign-in'?z.string().optional(): z.string().max(50),
    state:type==='sign-in'?z.string().optional(): z.string().min(2).max(2),
    postalCode:type==='sign-in'?z.string().optional(): z.string().min(3).max(6),
    dateofbirth:type==='sign-in'?z.string().optional(): z.string().min(3),
    city:type==='sign-in'?z.string().optional(): z.string().min(3),
    ssn:type==='sign-in'?z.string().optional(): z.string().min(3),
  });