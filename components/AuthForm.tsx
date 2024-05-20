"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
} from "@/components/ui/form";

import CustomInput from "./CustomInput";
import { AuthFormSchema } from "@/lib/schema";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";



const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

 const formSchema= AuthFormSchema(type)
 const router= useRouter();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit= async (data: z.infer<typeof formSchema >)=> {
        //signup with Appwrite and create plain token
    setIsLoading(true)
    try {
      if(type === 'sign-up'){
        const newUser= await signUp(data);
       setUser(newUser)
            
      }
      if(type === 'sign-in'){
          // const response= await signIn({
          //   email: data.email,
          //   password: data.password
          // })
          // if(response){
          //   router.push('/')}
      }
    } catch (error) {
      
    }finally{ }
    
    setIsLoading(false)
  }
  return (
    <div className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className=" cursor-pointer flex items-center">
          <Image
            src="/icons/logo.svg"
            width={35}
            height={35}
            alt="crispbank"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">CrispBank</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1>
            {user ? "Link Account" : type == "sign-in" ? "Sign In" : "Sign Up"}

            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-1 md:gap"></div>
      ) : (
       
        <>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {type==='sign-up' && (
            <>
             <div className="flex gap-4">
             <CustomInput control={form.control} 
              name='firstName'
              label='First Name'
              placeholder='Enter your first name'
              type='text'
          />
            <CustomInput control={form.control} 
              name='lastName'
              label='Last Name'
              placeholder='Enter your last name'
              type='text'
          />
             </div>
           <CustomInput control={form.control} 
              name='address1'
              label='Address'
              placeholder='Enter your address'
              type='text'
          />
            <CustomInput control={form.control} 
            name='city'
            label='City'
            placeholder='Enter your city'
            type='text'
            />
           <div className="flex gap-4">
              <CustomInput control={form.control} 
              name='state'
              label='State'
              placeholder='ex: Lagos'
              type='text'
              />
              <CustomInput control={form.control} 
              name='postalCode'
              label='Postal Code'
              placeholder='ex: 1101'
              type='text'
              />
           </div>
           <CustomInput control={form.control} 
          name='dateofbirth'
          label='Date of Birth'
          placeholder='YYYY-MM-DD'
          type='date'
          />
          <CustomInput control={form.control} 
          name='ssn'
          label='SSN'
          placeholder='ex:1234'
          type='text'
          /> 
            </>
          )}
          <CustomInput control={form.control} 
          name='email'
          label='Email'
          placeholder='Enter your email address'
          type='email'
          />
            <CustomInput control={form.control} 
          name='password'
          label='Password'
          placeholder='Enter your password'
          type='password'
          />
         <div className="flex flex-col gap-6">
         <Button className="form-btn" type="submit" disabled={isLoading}>
          {isLoading?(
            <>
            <Loader2 className="w-6 h-6 animate-spin"/> &nbsp; Loading...
            </>
          ):type==='sign-in'? 'Sign in': 'Sign Up'}
         </Button>
         </div>

        </form>
        </Form>
        <footer className="flex justify-center gap-1">
           <p className="text-14 text-gray-600"> {type==='sign-in'?'Don’t have an account?':'Already have an account?'}</p>
            <Link href={type==='sign-in'?'/sign-up':'/sign-in'} className="form-link">
              {type==='sign-in'?'Sign Up':'Sign in'} </Link>
        </footer>
        </>
       
      )
      }
    </div>
  );
};

export default AuthForm;
