import React, { use, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const location = useLocation();
    const navigate = useNavigate();
  const { resetPassword } = use(AuthContext);
  const emailFromLogin = location.state || "";
  const [email, setEmail] = useState(emailFromLogin);
  const handleReset = () => {
    if (!email) {
      Swal.fire("Please enter your email!");
      return;
    }
    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password reset email sent!",
          text: "Check your Gmail inbox",
        });
        navigate(location.state ? location.state : "/auth/login");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed to send email!",
          text: error.message,
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-xl p-4">
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>

        <form className="card-body">
          <label className="label">Email</label>
          <input
            type="email"
            value={email}
            className="input"
            placeholder="Enter Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="button"
            onClick={handleReset}
            className="btn btn-neutral mt-4"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
