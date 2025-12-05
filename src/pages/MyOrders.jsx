import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyOrders = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-4">
        {/* Download Button */}
        <button
          onClick={downloadReport}
          className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
        >
          Download Report
        </button>

        {/* Responsive Table */}
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
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
              {orders.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{item.productName}</td>
                  <td className="px-4 py-2">{item.buyerName}</td>
                  <td className="px-4 py-2">${item.price}</td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">{item.address}</td>
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">{item.phone}</td>
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
