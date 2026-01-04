import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import gsap from "gsap";

const Register = () => {
  const { createUser, setUser, updateUser, googleLogin } =
    useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(formRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }

    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must have an uppercase, lowercase & at least 6 characters",
      });
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Account Created Successfully!",
              timer: 1500,
              showConfirmButton: false,
            });
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(location.state ? location.state : "/auth/login");
          })
          .catch((err) => {
            console.log(err);
            setUser(user);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
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
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  const handleTogglePass = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[var(--color-base-200)] transition-colors duration-300">
      <div ref={formRef} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8 px-6 border border-base-200">
        <h2 className="font-extrabold text-3xl text-center text-[var(--color-primary)] mb-2">
          Create Account
        </h2>
        <p className="text-center text-sm text-base-content/60 mb-6">Join the PawMart community today!</p>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
            {/* Name */}
            <div className="form-control">
              <label className="label text-base-content font-semibold">Name</label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full focus:border-[var(--color-primary)] focus:outline-none bg-base-200"
                placeholder="Ex. John Doe"
                required
              />
              {nameError && <p className="text-red-500 text-xs mt-1">{nameError}</p>}
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label className="label text-base-content font-semibold">Photo URL</label>
              <input
                name="photo"
                type="url"
                className="input input-bordered w-full focus:border-[var(--color-primary)] focus:outline-none bg-base-200"
                placeholder="https://..."
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label text-base-content font-semibold">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full focus:border-[var(--color-primary)] focus:outline-none bg-base-200"
                placeholder="john@example.com"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control relative">
              <label className="label text-base-content font-semibold">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full focus:border-[var(--color-primary)] focus:outline-none bg-base-200"
                placeholder="••••••"
                required
              />
              <button
                onClick={handleTogglePass}
                className="absolute right-4 top-[35px] text-base-content/50 hover:text-[var(--color-primary)] transition"
              >
                {showPassword ? <IoIosEyeOff size={20} /> : <IoIosEye size={20} />}
              </button>
            </div>

            {/* Register Button */}
            <button type="submit" className="btn bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] w-full mt-4 text-lg border-none">
              Register
            </button>

            <div className="divider text-base-content/50 text-sm">Or continue with</div>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline border-base-300 w-full hover:bg-base-200 hover:text-base-content flex items-center justify-center gap-2"
            >
              <FaGoogle className="text-blue-500" /> Google
            </button>

            <p className="text-center text-sm mt-4 text-base-content/70">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-[var(--color-secondary)] font-bold hover:underline">
                Login
              </Link>
            </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
