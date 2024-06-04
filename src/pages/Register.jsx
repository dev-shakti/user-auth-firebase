import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { handleSubmit, register,formState: { errors } } = useForm();
 
  const onsubmit = (data) => {
    console.log(data);
   
  };


  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <p className="error-message">{errors.username.message}</p>}
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email",{ required: "Email is required" })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
            />
             {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
          <button className="btn">Register</button>
          <p className="text">Already have account ? <Link className="links" to= "/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
