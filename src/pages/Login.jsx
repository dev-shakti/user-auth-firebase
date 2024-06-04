import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors)
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email", { required: "Email is required" })}
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
          <button className="btn">Login</button>
          <p className="text">
            Don't have account ?
            <Link className="links" to="/register">
          
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
