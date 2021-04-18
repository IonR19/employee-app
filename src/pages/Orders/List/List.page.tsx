import React from "react";
import { useSelector } from "react-redux";
import { selectOrders } from "../../../store/orders";

interface Props {}

const OrderList = (props: Props) => {
  const orders = useSelector(selectOrders);
  return (
    <div className="box">
      <h1>All Orders</h1>
      {orders.map((ord, i) => (
        <li key={i}>{JSON.stringify(ord)}</li>
      ))}
    </div>
  );
};

export default OrderList;
