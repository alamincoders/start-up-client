import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { registerUser } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.password1 !== data.password2) {
      window.confirm("Your password is incorrect,, please enter your correct password");
    }
    registerUser(data.email, data.password, data.name);
    reset();
  };
  const bg = {
    background: "url(https://images.squarespace-cdn.com/content/v1/562584abe4b08b3753654f5a/1543006439810-WPIB7RH0ZKSFNDNC2MM1/IMG-1437.JPG)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={{ ...bg, height: "100vh" }}>
      <div className="login register-card ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img
            className="img-fluid mx-auto"
            style={{ width: "100px" }}
            src="https://i.ibb.co/pLd7Psj/xlogo-png-pagespeed-ic-TPJc-IPa4-Tw.webp"
            alt=""
          />
          <h3 className="text-muted text-center my-3">User Registration</h3>
          <input name="name" type="text" placeholder="Full Name" {...register("name", { required: true })} />
          <input name="email" type="email" placeholder="Email Address" {...register("email", { required: true })} />
          <input name="password1" type="password" placeholder="Password" {...register("password1")} />{" "}
          <input name="password2" type="password" placeholder="Confirm Password" {...register("password2")} />{" "}
          <input value="Create Account" type="submit" />
        </form>
        <p className="lead text-center mt-3">
          <span className="para"> Already have an Account?</span>
          <Link className="text-decoration-none fs-6 ms-2" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
