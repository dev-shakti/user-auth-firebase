import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);

const Register = () => {

  const navigate=useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(auth, data.email, data.password).then(
      (value) => {
        toast.success("Registration successful!", {
          onClose: () => {
            reset(); // Reset the form fields
            navigate('/login'); // Navigate to the login page
          }
        });
        console.log(value);
      }
    ).catch((err) => {
      toast.error("Registration failed. Please try again.");
      console.log(err)
    })
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
          {/* <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}
          </div> */}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              autoComplete="off"
              placeholder="Enter Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
             autoComplete="off"
              type="password"
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>
          <button className="btn">Register</button>
          <p className="text">
            Already have account ?{" "}
            <Link className="links" to="/login">
              Login
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
