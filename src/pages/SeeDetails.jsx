import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLoaderData, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const SeeDetails = ({ children }) => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  // Detect theme
  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    setIsDark(theme === "dark");
  }, []);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const productId = form.productId.value;
    const name = form.name.value;
    const quantity = data.category === "Pets" ? 1 : form.quantity.value;
    const price = form.price.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const notes = form.notes.value;

    const formData = {
      buyerName,
      buyerEmail,
      productId,
      name,
      quantity,
      price,
      address,
      phone,
      notes,
      date: new Date(),
    };

    axios
      .post(`http://localhost:3000/orders`, formData)
      .then((res) => {
        toast.success("Order Confirm!");
        document.getElementById("my_modal_3").close();
      })
      .catch((err) => {
        toast.error("Order Failed");
      });

    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
  };
  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <ToastContainer />
      <Navbar></Navbar>
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row gap-5 my-10">
        <div className="md:w-1/3 flex justify-center items-center bg-gray-100 p-4">
          <img
            src={data.image}
            alt={data.name}
            className="object-contain h-64 w-full"
          />
        </div>

        <div className="md:w-2/3 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
            <p className="text-gray-600 mb-3 text-justify">
              {data.description}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Category:</span> {data.category}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Price:</span> ${data.price}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Location:</span> {data.location}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Owner's Email:</span> {data.email}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Pick Up Date:</span> {data.date}
            </p>
          </div>

          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Order Now
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="max-w-xl mx-auto my-10 p-6 shadow-lg rounded-xl ">
                <h2 className="text-2xl font-bold text-center mb-4 text-blue-900">
                  Order Information
                </h2>

                <form onSubmit={handleOrder} className="space-y-4">
                  {/* Buyer Name */}
                  <div>
                    <label className="font-semibold">Buyer Name</label>
                    <input
                      type="text"
                      name="buyerName"
                      value={user?.displayName}
                      readOnly
                      className="w-full border px-3 py-2 rounded "
                    />
                  </div>

                  {/* Buyer Email */}
                  <div>
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="buyerEmail"
                      value={user?.email}
                      readOnly
                      className="w-full border px-3 py-2 rounded "
                    />
                  </div>

                  {/* Listing ID */}
                  <div>
                    <label className="font-semibold">Product ID</label>
                    <input
                      type="text"
                      name="productId"
                      value={data?._id}
                      readOnly
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>

                  {/* Listing Name */}
                  <div>
                    <label className="font-semibold">Product Name</label>
                    <input
                      type="text"
                      name="name"
                      value={data?.name}
                      readOnly
                      className="w-full border px-3 py-2 rounded "
                    />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="font-semibold">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      // value={data?.category === "Pets" ? 1 : undefined}
                      defaultValue={data?.category === "Pets" ? 1 : ""}
                      disabled={data?.category === "Pets"}
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>

                  {/* Price */}
                  <div>
                    <label className="font-semibold">Price</label>
                    <input
                      type="number"
                      name="price"
                      value={data?.price}
                      readOnly
                      className="w-full border px-3 py-2 rounded "
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="font-semibold">Address</label>
                    <textarea
                      name="address"
                      required
                      rows="2"
                      className="w-full border px-3 py-2 rounded"
                      placeholder="Enter your full address"
                    ></textarea>
                  </div>

                  {/* Pick Up Date */}
                  <div>
                    <label className="font-semibold"> Date</label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-semibold">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full border px-3 py-2 rounded"
                      placeholder="Phone number"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="font-semibold">Additional Notes</label>
                    <textarea
                      name="notes"
                      rows="2"
                      className="w-full border px-3 py-2 rounded"
                      placeholder="Write any something..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
                  >
                    Order Confirm
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SeeDetails;
