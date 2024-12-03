import React from "react";
import { useLocation } from "react-router-dom";

function Order() {
  const location = useLocation();
  const orderDataFromCart = location.state;
  return <div>Order</div>;
}

export default Order;
