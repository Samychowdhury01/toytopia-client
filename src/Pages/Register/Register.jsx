/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signUpImg from "../../assets/images/login/signup.svg";
import useTitle from "../../Hooks/useTitle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  useTitle("Sign Up");
  const { createUser, updateUserProfile,} = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()
  

  const handleRegister = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const photo = form.photo.value
    const password = form.password.value
    
    setErrorMessage('')
    // registration functionalities starts here
    createUser(email, password)
    .then((result) =>{
      updateUserProfile(name, photo)
      const createdUser = result.user
      toast.success("You have successfully created an account")
      navigate(location?.state?.from?.pathname || '/')
      event.target.reset()
      console.log(createUser)
    })

    .catch(error =>{
      setErrorMessage(error.message)
      toast.error('Something is wrong, Try Again!!')
    })

  }



  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row items-center justify-center gap-10">
        <div className="text-center lg:text-left">
          <img src={signUpImg} alt="login-image" />
        </div>
        <div className=" md:w-2/3  shadow-2xl bg-base-100 rounded-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-center text-4xl font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div
                onClick={() => setShowPass(!showPass)}
                className="cursor-pointer absolute right-4 bottom-6"
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
              <label className="text-center mt-3 text-red-600 text-lg font-bold">
                <p>{errorMessage}</p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn" />
            </div>
            <label className="mt-3 text-lg">
              <span>Already Have an Account?</span>{" "}
              <Link
                to="/login"
                className="text-[#FFBB00] hover:link link-neutral font-bold duration-300 transition-all"
              >
                Login
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
