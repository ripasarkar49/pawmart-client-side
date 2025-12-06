import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AddListing = () => {
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isDark, setIsDark] = useState(false); // detect dark mode

  const today = new Date().toISOString().split("T")[0];

  // Sync with html data-theme
  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    setIsDark(theme === "dark");
  }, []);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);

    if (selected === "Pets") {
      setPrice(0);
    } else {
      setPrice("");
    }
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      category: form.category.value,
      price: parseInt(price),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      email: form.email.value,
    };

    axios
      .post("http://localhost:3000/services", formData)
      .then(() => {
        toast.success("Listing added successfully!");
        form.reset();
        setCategory("");
        setPrice("");
        setDate("");
      })
      .catch(() => toast.error("Failed to add listing"));
  };

  return (
    <div className={`${isDark ? "dark" : ""}`}>
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
          Add New Listings (adoption or product)
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product/Pet Name */}
          <div>
            <label className="block font-semibold mb-1">Product / Pet Name</label>
            <input
              type="text"
              name="name"
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring ${
                isDark
                  ? "focus:ring-blue-400 bg-gray-700 text-gray-100 border-gray-600"
                  : "focus:ring-blue-300 bg-white text-gray-900 border-gray-300"
              }`}
              placeholder="Enter name"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              name="category"
              className={`w-full border rounded-lg px-3 py-2 sm:w-60 sm:text-base focus:outline-none focus:ring ${
                isDark
                  ? "focus:ring-blue-400 bg-gray-700 text-gray-100 border-gray-600"
                  : "focus:ring-blue-300 bg-white text-gray-900 border-gray-300"
              }`}
              value={category}
              onChange={handleCategoryChange}
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
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring ${
                isDark
                  ? "focus:ring-blue-400 bg-gray-700 text-gray-100 border-gray-600"
                  : "focus:ring-blue-300 bg-white text-gray-900 border-gray-300"
              }`}
              value={price}
              onChange={handlePriceChange}
              placeholder="0"
              disabled={category === "Pets"}
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold mb-1">Location</label>
            <input
              type="text"
              name="location"
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring ${
                isDark
                  ? "focus:ring-blue-400 bg-gray-700 text-gray-100 border-gray-600"
                  : "focus:ring-blue-300 bg-white text-gray-900 border-gray-300"
              }`}
              placeholder="Enter location"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write details..."
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring ${
                isDark
                  ? "focus:ring-blue-400 bg-gray-700 text-gray-100 border-gray-600"
                  : "focus:ring-blue-300 bg-white text-gray-900 border-gray-300"
              }`}
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="url"
              name="image"
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring ${
                isDark
                  ? "focus:ring-blue-400 bg-gray-700 text-gray-100 border-gray-600"
                  : "focus:ring-blue-300 bg-white text-gray-900 border-gray-300"
              }`}
              placeholder="Image URL"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-semibold mb-1">Pick Up Date</label>
            <input
              type="date"
              name="date"
              className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring ${
                isDark
                  ? "focus:ring-blue-400 bg-gray-700 text-gray-100 border-gray-600"
                  : "focus:ring-blue-300 bg-white text-gray-900 border-gray-300"
              }`}
              value={date}
              min={today}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              className={`w-full border rounded-lg px-3 py-2 cursor-not-allowed ${
                isDark
                  ? "bg-gray-700 text-gray-100 border-gray-600"
                  : "bg-gray-100 text-gray-900 border-gray-300"
              }`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default AddListing;
