import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/orders`)
      .then((res) => {
        setMyOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-4 w-11/12 mx-auto">
        {/* Download Button */}
        <button
          //   onClick={downloadReport}
          className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
        >
          Download Report
        </button>

        {/* Responsive Table */}
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2">SL </th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Buyer</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Qty</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Phone</th>
              </tr>
            </thead>

            <tbody>
              {myOrders.map((order, index) => (
                <tr key={order._id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{order.name}</td>
                  <td className="px-4 py-2">{order.buyerName}</td>
                  <td className="px-4 py-2">${order.price}</td>
                  <td className="px-4 py-2">{order.quantity}</td>
                  <td className="px-4 py-2">{order.address}</td>
                  <td className="px-4 py-2">
                    {new Date(order?.date).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </td>
                  <td className="px-4 py-2">{order.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyOrders;
