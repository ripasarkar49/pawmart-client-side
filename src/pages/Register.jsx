import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
const Register = () => {
  const { createUser, setUser, updateUser, googleLogin } = use(AuthContext);
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 character");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ name, photo, email, password });

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "password must be an Uppercase , Lowercase & at least 6 character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Account create Successful!",
              timer: 1500,
              showConfirmButton: false,
            });
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(location.state ? location.state : "/auth/login");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleTogglePass = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
        <h2 className="font-semibold text-2xl text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name*/}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
            {/* Photo UrL*/}
            <label className="label">Photo URl</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />
            {/* Email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
                required
              />
              <button
                onClick={handleTogglePass}
                className="btn btn-xs top-2 right-5 absolute"
              >
                {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
              </button>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            {error && <p className="text-red-500">{error}</p>}
            <p className="font-bold text-center py-1 ">OR</p>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-secondary btn-outline w-full"
            >
              <FaGoogle size={24} /> Login With Google
            </button>
            <p className="pt-4">
              Already have an account. Please{" "}
              <Link to="/auth/login" className="text-secondary font-semibold">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
