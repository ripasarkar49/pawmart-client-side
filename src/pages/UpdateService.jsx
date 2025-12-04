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
  const [service, setService] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState(0);
  const navigation = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3000/services/${id}`).then((res) => {
      setService(res.data);
      setCategory(res.data.category);
      if (res.data.category === "Pets") {
        setPrice(0);
      } else {
        setPrice(res.data.price);
      }
    });
  }, [id]);
  console.log(service);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const priceValue = parseInt(price);
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = form.email.value;

    const formData = {
      name,
      category,
      price: priceValue,
      location,
      description,
      image,
      date,
      email,
    };
    console.log(formData);

    axios
      .put(`http://localhost:3000/update/${id}`, formData)
      .then((res) => {
        // console.log(res.data);
        toast.success("Listing Updated successfully!");
        setTimeout(() => {
          navigation("/my-listings");
        }, 1000);
      })
      .catch((err) => {
        toast.error("Failed to Updated listing");
      });
  };

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="max-w-2xl mx-auto my-10 bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl text-blue-950 font-bold mb-5 text-center">
          Update Listings (adoption or product)
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Product/Pet Name */}
          <div>
            <label className="block font-semibold mb-1">
              Product / Pet Name
            </label>
            <input
              type="text"
              defaultValue={service?.name}
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0"
              disabled={category === "Pets"}
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold mb-1">Location</label>
            <input
              type="text"
              defaultValue={service?.location}
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
              defaultValue={service?.description}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              rows="2"
              placeholder="Write details..."
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="url"
              name="image"
              defaultValue={service?.image}
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
              defaultValue={service?.date}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"

              //   min={today}
              //   onChange={(e) => setDate(e.target.value)}
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
            Update
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateService;
