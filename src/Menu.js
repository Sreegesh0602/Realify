import React from "react";
import MenuItem from "./MenuItem";

function Menu({ category, menuData, addToOrder }) {
  const items = menuData[category];

  return (
    <div className="menu">
      {items.map(item => (
        <MenuItem key={item.id} item={item} addToOrder={addToOrder} />
      ))}
    </div>
  );
}

export default Menu;
