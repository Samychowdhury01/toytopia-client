/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import useTitle from "../../Hooks/useTitle";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  useTitle("Login");
  const { loginWithEmail, googleSignIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmail(email, password)
      .then((result) => {
        toast.success("Login Successful");
        navigate(location?.state?.from?.pathname || "/");
        event.target.reset();
      })
      .catch((error) => {
        const message = error.message;
        setErrorMessage(message)
      });
  };

  // handler for google login
  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then((result) =>{
      const loggedUser = result.user
      toast.success("Login successful")
      navigate(location?.state?.from?.pathname || "/");
    })
    .catch((error)=> {
      toast.error(`${error.message}`)
    })
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="login-image" />
        </div>
        <div className=" md:w-2/3  shadow-2xl bg-base-100 rounded-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-center text-4xl font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div
                onClick={() => setShowPass(!showPass)}
                className="cursor-pointer absolute right-4 top-12 "
              >
                {showPass ? (
                  <FaEye className="text-2xl" />
                ) : (
                  <FaEyeSlash className="text-2xl" />
                )}
              </div>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="text-center mt-3 text-red-600 font-bold">
                <p>{errorMessage}</p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn" />
            </div>
            <label className="mt-3 text-lg">
              <span>Don't Have an Account?</span>{" "}
              <Link
                to="/register"
                state={location?.state}
                className="text-[#FFBB00] hover:link link-neutral font-bold duration-300 transition-all"
              >
                Sign Up
              </Link>
            </label>
          </form>
          <div className="divider w-2/3 mx-auto">OR</div>
          <div 
          onClick={handleGoogleSignIn}
          className="border h-12 md:w-2/3 mx-5 md:mx-auto mb-5 p-6 rounded-2xl flex items-center justify-center gap-2 cursor-pointer">
            <FcGoogle className="text-4xl" />
            <span className="md:text-xl font-bold">Continue with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
