import React from "react";
import { useDispatch } from "react-redux";
import { Order } from "../../../models";
import { AcceptOrder, fetchOrders, RejectOrder, selectNewOrders } from "../../../store/orders";
import { Button } from "react-bulma-components";
import { useSelector } from "react-redux";
interface Props {}
interface RenderRowProps {
  ord: Order;
  i: number;
}
const RenderRow: React.FC<RenderRowProps> = ({ ord, i }) => {
  const dispatch = useDispatch();

  return (
    <>
      <td>{i}</td>
      <td>{ord.type}</td>
      {ord.type == "vacation" && (
        <td colSpan={3}>
          <b>From: </b>
          {ord.from} - <b>To: </b>
          {ord.to}
          <br></br>
          <b>Duration :</b>
          {ord.duration}
        </td>
      )}
      {ord.type == "leave" && <td colSpan={3}>{ord.leave}</td>}
      <td>
        <Button.Group align="center">
          <Button color="primary" onClick={() => dispatch(AcceptOrder(ord.id))}>
            OK
          </Button>
          <Button color="danger" outlined onClick={() => dispatch(RejectOrder(ord.id))}>
            REJECT
          </Button>
          <Button color="info" outlined>
            View
          </Button>
        </Button.Group>
      </td>
    </>
  );
};

const OrderList = (props: Props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const orders = useSelector(selectNewOrders);
  return (
    <div className="box">
      <h1 className="title has-text-centered">All New Orders</h1>
      {orders.length === 0 && <h2 className="mt-5 subtitle is-5 has-text-centered">No New Orders</h2>}
      {orders.length !== 0 && (
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
                <RenderRow ord={ord} i={i + 1} />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderList;
