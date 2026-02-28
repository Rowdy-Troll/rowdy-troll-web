import { useParams, Link } from "react-router-dom";
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
            <strong>Total Price:</strong> ${order.totalPrice}
          </p>
          <p>
            <strong>Created At:</strong> {order.createdAt}
          </p>
          <p>
            <strong>Paid:</strong> {order.isPaid.toString()}
          </p>
          <p>
            <strong>Paid At:</strong> {order.paidAt ?? "—"}
          </p>
          <p>
            <strong>Delivered:</strong> {order.isDelivered.toString()}
          </p>
          <p>
            <strong>Delivered At:</strong> {order.deliveredDate ?? "—"}
          </p>

          {!order.isPaid && (
            <Link to={`/payment/${order.id}`} className="button primary">
              Proceed to Payment
            </Link>
          )}
        </div>
      ) : (
        <p>Order not found.</p>
      )}
    </div>
  );
}

export default OrderDetail;
