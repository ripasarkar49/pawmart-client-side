import React from "react";
import { Link } from "react-router";
import errorIcon from "../assets/error.jpg";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-300 text-center p-6">
      {/* <h1 className="text-6xl font-bold text-error">404</h1> */}
      <p className="text-xl text-error mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <img src={errorIcon} alt="Not Found" className="w-80 my-6" />
      <Link to="/">
        <button className="btn btn-primary">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
