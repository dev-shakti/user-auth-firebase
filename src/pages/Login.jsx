import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);

const Login = () => {

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password).then(
      (value) => {
        toast.success("Login successful!");
        console.log(value);
        reset(); // Reset the form fields
      }
    ).catch((err) => {
      toast.error("Login failed. Please try again.");
      console.log(err)
    })
  };
 
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Email</label>
            <input
            autoComplete="off"
              type="email"
              placeholder="Enter Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
             autoComplete="off"
              type="password"
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
            />
              {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
          <button className="btn">Login</button>
          <p className="text">
            Don't have account ? 
            <Link className="links" to="/register">         
              Register
            </Link>
          </p>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Login;
