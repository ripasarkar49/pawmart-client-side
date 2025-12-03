import React, { useState } from "react";
import tryImage from "../assets/form1.jpeg";
const TryNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Try Now Form Submitted:", formData);

    setFormData({ name: "", email: "" });
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 7000);
  };
  return (
    <div className="w-full mt-10  rounded-2xl bg-[#eef3f1]">
      <div className="max-w-6xl mx-auto gap-1 flex flex-col  md:flex-row items-center justify-between py-6 px-10">
        <div className="">
          <h3 className="text-4xl font-bold mb-3  ">
            All The New Best Collection
          </h3>
          {isSubmitted ? (
            <div className="p-3 mb-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              **Success! Request has been submitted. We'll be in touch soon!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-100 focus:border-blue-100"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Try Now
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img src={tryImage} className="w-full h-auto rounded-2xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TryNow;
