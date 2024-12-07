import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ item, addToOrder }) {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => addToOrder(item)}>Add to Order</button>
      <Link to={`/image/${item.id}`}>
        <button>Show Image</button>
      </Link>
    </div>
  );
}

export default MenuItem;
