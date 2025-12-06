import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const MylListings = () => {
  const [myServices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:3000/my-listing?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyServices(data))
      .catch((err) => console.log(err));
  }, [user?.email]);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((res) => {
        // console.log(res.data);
        const filterData = myServices.filter((service) => service._id != id);
        setMyServices(filterData);
        toast.success("Listing Delete successfully!");
      })
      .catch((err) => {
        toast.error("Failed to delete listing");
      });
  };
  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <div className="overflow-x-auto w-11/12 mx-auto py-7">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl font-bold text-fuchsia-950">
              <th>Name/Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myServices?.map((service) => (
              <tr key={service._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={service?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service?.name}</div>
                      <div className="text-sm opacity-50">
                        {service?.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {service?.description}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {service?.location}
                  </span>
                </td>
                <td>${service?.price}</td>
                <td className="flex gap-3">
                  <button
                    onClick={() => handleDelete(service?._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/update-service/${service?._id}`}
                    className="btn btn-primary btn-xs"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MylListings;
