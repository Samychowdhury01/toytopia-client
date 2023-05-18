import React from 'react';
import loginImg from '../../assets/images/login/login.svg'

const Login = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-5">
    <div className="text-center lg:text-left">
      <img src={loginImg} alt="login-image" />
    </div>
    <div className=" md:w-2/3  shadow-2xl bg-base-100 rounded-2xl">
      <form className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input type="submit" value="Login" className="btn"/>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;