'use client'
import React, { useState } from 'react';
import './page.css';
import Link from 'next/link';

const Login = () => {
  const [inputData, setInputData] = useState({
      email:"",
      password:""
  }); 

  const handleInput=(e)=>{
      setInputData({...inputData,[e.target.name]:e.target.value});
  }
  const handleForm=(e)=>{
       e.preventDefault();
       console.log(inputData);
  }
  return (
    <div>
      <h1 className=' text-center mt-36 font-extrabold text-5xl '>Login</h1>
      <p className=' text-center mt-3'>Please enter your e-mail and password:</p>
      <div className='register-form'>
       <form className='form' onSubmit={handleForm}> 
        <div className='input-parent'>
          <input className='input' type="email" placeholder='E-mail' name="email" onChange={handleInput} required />
          <input className='input' type="password" placeholder='Password' name="password" onChange={handleInput} required />
          <div className='Parent-forgetResetPassword'>
             <span className='forgetResetPassword'>Forget your Password?</span>
             <span className='forgetResetPassword'>Want to Reset your Password?</span>
          </div>
          <button className='btn'>LOGIN</button>
        </div>
       </form>
      </div>
       <p className='already-customer'>New customer? <Link className=' ml-1 ' href={'/account/register'}>Create an account</Link> </p>
    </div>
  )
}

export default page
