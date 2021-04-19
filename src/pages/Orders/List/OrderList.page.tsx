import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AcceptOrder, fetchOrders, RejectOrder, selectNewOrders } from "../../../store/orders";

interface Props {}

const OrderList = (props: Props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const orders = useSelector(selectNewOrders);
  return (
    <div className="box">
      <h1 className="title has-text-centered">All Orders</h1>
      <table className="table is-hoverable is-fullwidth is-striped is-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th colSpan={3}>Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((ord, i) => (
            <tr key={ord.id}>
              <td>{i + 1}</td>
              <td>{ord.type}</td>
              <td colSpan={3}>
                <b>From: </b>
                {ord.from} - <b>To: </b>
                {ord.to}
                <br></br>
                <b>Duration :</b>
                {ord.duration}
              </td>
              <td>
                <button className="button is-primary" onClick={() => dispatch(AcceptOrder(ord.id))}>
                  OK
                </button>
                |
                <button className="button is-danger" onClick={() => dispatch(RejectOrder(ord.id))}>
                  REJECT
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
