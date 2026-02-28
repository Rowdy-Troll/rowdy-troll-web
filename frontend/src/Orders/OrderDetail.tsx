import { useParams } from "react-router-dom";
import data from "./data";

function OrderDetail() {
  const { id } = useParams<{ id: string }>();
  const order = data.orders.find((o) => o.id === parseInt(id || "", 10));

  return (
    <div className="content content-margined">
      <h3>Order Details</h3>

      {order ? (
        <div>
          <p>
            <strong>Order ID:</strong> {order.id}
          </p>
          <p>
            <strong>User:</strong> {order.user.name}
          </p>
          <p>
            <strong>Total:</strong> ${order.totalPrice}
          </p>
          <p>
            <strong>Paid:</strong> {order.isPaid.toString()}
          </p>
          <p>
            <strong>Delivered:</strong> {order.isDelivered.toString()}
          </p>
        </div>
      ) : (
        <p>Order not found.</p>
      )}
    </div>
  );
}

export default OrderDetail;
