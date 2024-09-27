import { useState } from 'react' 
import { useForm } from "react-hook-form"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
  const {
    register,
    handleSubmit,
    watch, 
    setError,
    formState: { errors ,isSubmitting},
  } = useForm()
 

  
  const delay=async(d)=>{ 
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },d*1000)

    })
    
  }
  const onSubmit = async (data) =>{ 
      // await delay(4); 
      let r = await fetch("http://localhost:3000/"); 
      let res=await r.json();
      console.log(data,res); 
      
    }


  return (
    <>

    {isSubmitting && <div>Loading...</div>}
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username",{required:true,minLength:{value:8,message:"Username is too short"}})} placeholder='Username' />     
      {errors.username && <div>{errors.username.message}</div>}
      <br/>
      <input {...register("password", { required: true ,minLength:{value:6,message:"Password is too short"},maxLength:{value:12,message:"Password is too long"}})} placeholder="Password" /> 
      <br/>
      
      <input disabled={isSubmitting} type="submit" /> 
      {errors.myforms && errors.myforms.message}
    </form>
  
    </>
  )
}

export default App
