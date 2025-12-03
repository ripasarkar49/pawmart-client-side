import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../Provider/AuthProvider";

const AddListing = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = form.email.value;
    const formData = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
    };
    console.log(formData);
    
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-2xl mx-auto my-10 bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-5 text-center">
          Add New Listings (adoption or product)
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product/Pet Name */}
          <div>
            <label className="block font-semibold mb-1">
              Product / Pet Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter name"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              name="category"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select Category</option>
              <option>Pets</option>
              <option>pets Food</option>
              <option>Accessories</option>
              <option>pet Care Products</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              type="number"
              name="price"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="0"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold mb-1">Location</label>
            <input
              type="text"
              name="location"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter location"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              rows="3"
              placeholder="Write details..."
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="url"
              name="image"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Image URL"
            />
          </div>

          {/* Date (Pick Up) */}
          <div>
            <label className="block font-semibold mb-1">Pick Up Date</label>
            <input
              type="date"
              name="date"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Email (Readonly) */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
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
      <Footer></Footer>
    </div>
  );
};

export default AddListing;
