import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from '../Item/Item';

import './ShopList.css';

const ShopList = () => {

  const [shop, setShop] = useState([]);

  useEffect(() => {
    setShop([
      { id: uuidv4(), name: "Nike Air Max", color: "White", price: "$550" },
      { id: uuidv4(), name: "Adidas", color: "White", price: "$350" },
      { id: uuidv4(), name: "Reebok", color: "Black", price: "$200" },
      { id: uuidv4(), name: "Vans", color: "Green", price: "$600" },

    ]);
  }, []);

  const deleteItem = (id) => {
    setShop(shop.filter(item => item.id !== id));
  };


  return (
    <div className="shop-container">
      <header className="header-shop">
        <h1>
          Shopping Bag
        </h1>
      </header>
      <ul>
        {shop.map((item, index) => <Item deleteItem={deleteItem} key={index} data={{ ...item, index }} />)}
      </ul>
    </div>
  );
};
export default ShopList; 