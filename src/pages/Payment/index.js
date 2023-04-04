import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { qty, subtotal, productName, productImage } = location.state;

  const handlePayment = () => {
    // Code to process payment
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Payment Summary</h1>
      <div className="flex mb-4">
        <img
          src={productImage}
          alt={productName}
          className="w-64 h-64 object-cover rounded-md mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{productName}</h2>
          <p className="text-red-500 font-semibold">{`Rp${subtotal}`}</p>
          <p className="text-gray-500">{`Qty: ${qty}`}</p>
        </div>
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md"
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
