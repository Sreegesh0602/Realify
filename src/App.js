import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from "./Menu";
import Bill from "./Bill";
import Modal from "./Modal";
import ImagePage from "./ImagePage"; // New component for the image page
import './App.css';

const menuData = {
  drinks: [
    { id: 1, name: 'Coke', price: 1.5, image: '/assets/3d/model.glb' },
    { id: 2, name: 'Orange Juice', price: 2.0, image: '/assets/menu-image.jpg' },
    { id: 3, name: 'Lemonade', price: 1.8, image: '/assets/menu-image.jpg' }
  ],
  appetizers: [
    { id: 4, name: 'Spring Rolls', price: 3.0, image: '/assets/menu-image.jpg' },
    { id: 5, name: 'Garlic Bread', price: 2.5, image: '/assets/menu-image.jpg' }
  ],
  starters: [
    { id: 6, name: 'Tomato Soup', price: 3.5, image: '/assets/menu-image.jpg' },
    { id: 7, name: 'Chicken Wings', price: 5.0, image: '/assets/menu-image.jpg' }
  ],
  snacks: [
    { id: 8, name: 'French Fries', price: 2.0, image: '/assets/menu-image.jpg' },
    { id: 9, name: 'Nachos', price: 3.0, image: '/assets/menu-image.jpg' }
  ]
};

function App() {
  const [order, setOrder] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('drinks');

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const removeFromOrder = (itemId) => {
    setOrder(order.filter(item => item.id !== itemId));
  };

  const changeCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Welcome to Our Restaurant</h1>
          <p>Scan the QR code to view the menu and place your order!</p>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="menu-categories">
                    <button onClick={() => changeCategory('drinks')}>Drinks</button>
                    <button onClick={() => changeCategory('appetizers')}>Appetizers</button>
                    <button onClick={() => changeCategory('starters')}>Starters</button>
                    <button onClick={() => changeCategory('snacks')}>Snacks</button>
                  </div>

                  <Menu
                    category={selectedCategory}
                    menuData={menuData}
                    addToOrder={addToOrder}
                  />
                  
                  <Bill order={order} removeFromOrder={removeFromOrder} />
                </>
              }
            />
            {/* New route for ImagePage */}
            <Route path="/image/:id" element={<ImagePage menuData={menuData} />} />
          </Routes>
        </main>

        <footer>
          <p>Thank you for dining with us!</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
