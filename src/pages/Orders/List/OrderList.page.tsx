import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, selectOrders } from "../../../store/orders";

interface Props {}

const OrderList = (props: Props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchOrders());
  }, []);

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
