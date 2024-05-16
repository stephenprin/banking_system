import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath} from "react-hook-form";
import { z } from 'zod';
import { AuthFormSchema } from '@/lib/schema';


const formSchema= AuthFormSchema('sign-up')

interface CustomInputProps{
    control:Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label:string,
    placeholder:string,
    type: string,
    

}

const CustomInput = ({control,name,label,placeholder,type}:CustomInputProps) => {
  return (
    <div>
         <FormField
                control={control}
                name={name}
                render={({ field }) => (
                  <div className="form-item">
                    <FormLabel className="form-label">{label}</FormLabel>
                    <div className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          placeholder={placeholder}
                          {...field}
                          className="input-class outline-none"
                          type={type}
                        />
                      </FormControl>
                      <FormMessage className="form-message mt-2" />
                    </div>
                  </div>
                )}
              />
    </div>
  )
}

export default CustomInput