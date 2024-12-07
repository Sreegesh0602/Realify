import React from "react";

function Bill({ order, removeFromOrder }) {
  const totalPrice = order.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bill">
      <h2>Your Bill</h2>
      <ul>
        {order.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeFromOrder(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      {order.length > 0 && <button onClick={() => alert("Order confirmed! Thank you for dining with us.")}>Confirm Order</button>}
    </div>
  );
}

export default Bill;
