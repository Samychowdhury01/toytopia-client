/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import useTitle from '../../Hooks/useTitle';
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  useTitle('Login')
  const [errorMessage, setErrorMessage] = useState('')
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-10">
    <div className="text-center lg:text-left">
      <img src={loginImg} alt="login-image" />
    </div>
    <div className=" md:w-2/3  shadow-2xl bg-base-100 rounded-2xl">
      <form className="card-body">
        <h1 className='text-center text-4xl font-bold'>Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="text-center mt-3 text-red-600 text-lg font-bold">
            <p>{errorMessage}</p>
          </label>
        </div>
        <div className="form-control mt-6">
            <input type="submit" value="Login" className="btn"/>
        </div>
        <label className="mt-3 text-lg">
            <span>Don't Have an Account?</span> <Link to='/register' className='text-[#FFBB00] hover:link link-neutral font-bold duration-300 transition-all'>
            Sign Up
            </Link>
          </label>
      </form>
      <div className="divider w-2/3 mx-auto">OR</div>
      <div className='border h-12 md:w-2/3 mx-5 md:mx-auto mb-5 p-6 rounded-2xl flex items-center justify-center gap-2 cursor-pointer'>
      <FcGoogle className='text-4xl'/>
      <span className='md:text-xl font-bold'>Continue with Google</span>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;