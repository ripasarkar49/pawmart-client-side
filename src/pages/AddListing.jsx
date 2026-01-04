import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import useScrollAnimation from "../hooks/useScrollAnimation"; // Import the hook

const AddListing = () => {
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const today = new Date().toISOString().split("T")[0];

  // Animation hook
  useScrollAnimation(".animate-fade-up", {
     animationType: "fade-up",
     duration: 0.8,
  });

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
      .post("https://pawmart-server-side.vercel.app/services", formData)
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
    <div className="bg-[var(--color-base-200)] min-h-screen flex flex-col transition-colors duration-300">
      <ToastContainer />
      <Navbar />

      <div className="flex-grow flex items-center justify-center py-10 px-4">
        <div className="animate-fade-up max-w-2xl w-full bg-base-100 shadow-xl rounded-2xl p-8 border border-base-200">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-[var(--color-primary)]">
            Add New Listing
          </h2>
          <p className="text-center text-sm text-base-content/70 mb-8">
            Post an adoption request or sell a pet product.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Product/Pet Name */}
            <div>
              <label className="block font-semibold mb-2 text-base-content">
                Product / Pet Name
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full bg-base-200 focus:border-[var(--color-primary)] focus:outline-none"
                placeholder="Enter name"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Category */}
                <div>
                  <label className="block font-semibold mb-2 text-base-content">Category</label>
                  <select
                    name="category"
                    className="select select-bordered w-full bg-base-200 focus:border-[var(--color-primary)] focus:outline-none"
                    value={category}
                    onChange={handleCategoryChange}
                    required
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
                  <label className="block font-semibold mb-2 text-base-content">Price</label>
                  <input
                    type="number"
                    name="price"
                    className="input input-bordered w-full bg-base-200 focus:border-[var(--color-primary)] focus:outline-none disabled:bg-base-300 disabled:text-base-content/50"
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="0"
                    disabled={category === "Pets"}
                    required
                  />
                </div>
            </div>

            {/* Location */}
            <div>
              <label className="block font-semibold mb-2 text-base-content">Location</label>
              <input
                type="text"
                name="location"
                className="input input-bordered w-full bg-base-200 focus:border-[var(--color-primary)] focus:outline-none"
                placeholder="Enter location"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-semibold mb-2 text-base-content">Description</label>
              <textarea
                name="description"
                rows="4"
                placeholder="Write details..."
                className="textarea textarea-bordered w-full bg-base-200 focus:border-[var(--color-primary)] focus:outline-none text-base"
                required
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label className="block font-semibold mb-2 text-base-content">Image URL</label>
              <input
                type="url"
                name="image"
                className="input input-bordered w-full bg-base-200 focus:border-[var(--color-primary)] focus:outline-none"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Date */}
                <div>
                  <label className="block font-semibold mb-2 text-base-content">Pick Up Date</label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered w-full bg-base-200 focus:border-[var(--color-primary)] focus:outline-none"
                    value={date}
                    min={today}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-semibold mb-2 text-base-content">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user?.email || ""}
                    readOnly
                    className="input input-bordered w-full bg-base-300 cursor-not-allowed opacity-70"
                  />
                </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] border-none rounded-lg font-bold text-lg mt-4 shadow-md hover:shadow-lg transition-all"
            >
              Submit Listing
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddListing;
