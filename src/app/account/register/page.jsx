'use client'
import {useState} from 'react';
import './page.css';
import Link from 'next/link';
import { userSignup } from '@/app/ApiRoutes';


const Register = () => {
    const [inputData, setInputData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    });
    
    // async function postUserSignUp() {
    //   try {
    //     console.log("data1");
    //     const response = await axios.post(`http://localhost:4001/api/v1/user/register`,data);
    //     console.log("data");
    //     console.log('Response:', response.data);
    //     return response.data;
    //   }
    //   catch (error) { console.error('Error:', error.response.data); throw error; }
    // }

    const handleInput=(e)=>{
        setInputData({...inputData,[e.target.name]:e.target.value});
    }
    const handleForm=(e)=>{
         e.preventDefault();
         console.log(inputData);
         userSignup(inputData);
    }
  return ( 
    <div>
      <h1 className='register text-center mt-10 font-extrabold text-5xl '>Register</h1>
      <p className=' text-center mt-3'>Please fill in the fields below</p>
      <div className='register-form'>
       <form className='form' onSubmit={handleForm}> 
        <div className='input-parent'>
          <input className='input' type="text" placeholder='First Name' name="firstName" onChange={handleInput} required />
          <input className='input' type="text" placeholder='Last Name' name="lastName" onChange={handleInput} required />
          <input className='input' type="email" placeholder='E-mail' name="email" onChange={handleInput} required />
          <input className='input' type="password" placeholder='Password' name="password" onChange={handleInput} required />
          <input className='input' type="number" placeholder='Ph. Number' name="mobile" onChange={handleInput} required />
          <input type="radio" name="gender" onChange={handleInput} value="male"/> <span>Male</span>
          <input type="radio" name="gender" onChange={handleInput} value="female"/> <span>Female</span>
          <button className='btn'>CREATE ACCOUNT</button>
        </div>
       </form>
      </div>
       <p className='already-customer'>Already have an account? <Link className=' ml-1 ' href={'/account/login'}>Login</Link> </p>
    </div>
  )
}

export default Register
