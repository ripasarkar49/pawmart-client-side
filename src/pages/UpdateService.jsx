import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigation = useNavigate();

  const [service, setService] = useState(null);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [isDark, setIsDark] = useState(false);

  // Detect theme
  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    setIsDark(theme === "dark");
  }, []);

  // Load service data
  useEffect(() => {
    axios
      .get(`https://pawmart-server-side.vercel.app/services/${id}`)
      .then((res) => {
        const data = res.data;
        setService(data);
        setCategory(data.category);
        setPrice(data.category === "Pets" ? 0 : data.price);
        setDate(data.date);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      name: form.name.value,
      category,
      price: parseInt(price),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date,
      email: user?.email,
    };

    axios
      .put(`https://pawmart-server-side.vercel.app/update/${id}`, updatedData)
      .then(() => {
        toast.success("Listing updated successfully!");
        setTimeout(() => navigation("/my-listings"), 800);
      })
      .catch(() => toast.error("Failed to update listing"));
  };

  if (!service) {
    return (
      <p className="text-center text-xl py-10 dark:text-white">Loading...</p>
    );
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <ToastContainer />
      <Navbar />

      <div
        className={`max-w-2xl mx-auto my-10 shadow-lg rounded-xl p-6 
        ${isDark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}
      `}
      >
        <h2
          className={`text-3xl font-bold mb-5 text-center ${
            isDark ? "text-blue-400" : "text-blue-950"
          }`}
        >
          Update Listing (adoption or product)
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">
              Product / Pet Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={service.name}
              className={`w-full border rounded-lg px-3 py-2 focus:ring 
              ${
                isDark
                  ? "bg-gray-700 text-gray-100 border-gray-600 focus:ring-blue-400"
                  : "bg-white text-gray-900 border-gray-300 focus:ring-blue-300"
              }`}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 focus:ring 
              ${
                isDark
                  ? "bg-gray-700 text-gray-100 border-gray-600 focus:ring-blue-400"
                  : "bg-white text-gray-900 border-gray-300 focus:ring-blue-300"
              }`}
            >
              <option value="">Select Category</option>
              <option value="Pets">Pets</option>
              <option value="Food">Pets Food</option>
              <option value="Accessories">Accessories</option>
              <option value="Care Products">Pet Care Products</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={category === "Pets" ? 0 : price}
              onChange={(e) => setPrice(e.target.value)}
              disabled={category === "Pets"}
              className={`w-full border rounded-lg px-3 py-2 focus:ring 
              ${
                isDark
                  ? "bg-gray-700 text-gray-100 border-gray-600 focus:ring-blue-400"
                  : "bg-white text-gray-900 border-gray-300 focus:ring-blue-300"
              }`}
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold mb-1">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={service.location}
              className={`w-full border rounded-lg px-3 py-2 focus:ring 
              ${
                isDark
                  ? "bg-gray-700 text-gray-100 border-gray-600 focus:ring-blue-400"
                  : "bg-white text-gray-900 border-gray-300 focus:ring-blue-300"
              }`}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              rows="3"
              defaultValue={service.description}
              className={`w-full border rounded-lg px-3 py-2 focus:ring 
              ${
                isDark
                  ? "bg-gray-700 text-gray-100 border-gray-600 focus:ring-blue-400"
                  : "bg-white text-gray-900 border-gray-300 focus:ring-blue-300"
              }`}
            ></textarea>
          </div>

          {/* Image */}
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="url"
              name="image"
              defaultValue={service.image}
              className={`w-full border rounded-lg px-3 py-2 focus:ring 
              ${
                isDark
                  ? "bg-gray-700 text-gray-100 border-gray-600 focus:ring-blue-400"
                  : "bg-white text-gray-900 border-gray-300 focus:ring-blue-300"
              }`}
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-semibold mb-1">Pick Up Date</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 focus:ring 
              ${
                isDark
                  ? "bg-gray-700 text-gray-100 border-gray-600 focus:ring-blue-400"
                  : "bg-white text-gray-900 border-gray-300 focus:ring-blue-300"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              readOnly
              value={user?.email}
              className={`w-full border rounded-lg px-3 py-2 cursor-not-allowed 
              ${
                isDark
                  ? "bg-gray-700 text-gray-300 border-gray-600"
                  : "bg-gray-100 text-gray-900 border-gray-300"
              }`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg 
            font-semibold hover:bg-blue-700 duration-200"
          >
            Update Listing
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default UpdateService;
