import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import gsap from "gsap";

const Login = () => {
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, googleLogin } = useContext(AuthContext); // Use useContext here instead of use
  const location = useLocation();
  const Navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          timer: 1500,
          showConfirmButton: false,
        });
        Navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
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
        Navigate(location.state ? location.state : "/");
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
    <div className="flex justify-center items-center min-h-screen bg-[var(--color-base-200)] transition-colors duration-300">
      <div ref={formRef} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8 px-6 border border-base-200">
        <h2 className="font-extrabold text-3xl text-center text-[var(--color-primary)] mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-base-content/60 mb-6">Login to continue to your account.</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {/* email  */}
            <div className="form-control">
              <label className="label text-base-content font-semibold">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full focus:border-[var(--color-primary)] focus:outline-none bg-base-200"
                placeholder="Enter your email"
                required
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>

            {/* password */}
            <div className="form-control relative">
              <label className="label text-base-content font-semibold">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full focus:border-[var(--color-primary)] focus:outline-none bg-base-200"
                placeholder="Enter your password"
                required
              />
              <button
                onClick={handleTogglePass}
                className="absolute right-4 top-[35px] text-base-content/50 hover:text-[var(--color-primary)] transition"
              >
                {showPassword ? <IoIosEyeOff size={20} /> : <IoIosEye size={20} />}
              </button>
            </div>

            <div className="text-right">
              <Link to="/forget-password" state={userEmail} className="text-sm text-[var(--color-secondary)] hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button type="submit" className="btn bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] w-full mt-2 text-lg border-none">
              Login
            </button>
            
            {error && <p className="text-red-500 text-sm text-center font-semibold">{error}</p>}

            <div className="divider text-base-content/50 text-sm">Or login with</div>

            <button
              onClick={handleGoogleLogin}
              type="button"
              className="btn btn-outline border-base-300 w-full hover:bg-base-200 hover:text-base-content flex items-center justify-center gap-2"
            >
              <FaGoogle className="text-blue-500" /> Google
            </button>

            <p className="text-center text-sm mt-4 text-base-content/70">
              Don't have an account?{" "}
              <Link to="/auth/register" className="text-[var(--color-secondary)] font-bold hover:underline">
                Register
              </Link>
            </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
