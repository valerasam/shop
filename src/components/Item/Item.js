import React, { useState } from 'react';

import './Item.css';

const Item = ({
  deleteItem,
  data: { id, name, color, price }
}) => {
  const [count, setCount] = useState(0);

  return (
    <div className="shop-item">
      <button className="item-delete" onClick={() => deleteItem(id)}>
        &#11199;
      </button>
      <button className="item-like">
        &#128420;
      </button>
      <div className="item-photo">
        <img src="https://basketzone.pl/zdjecia/2019/09/11/409/53/NIKE_AIR_JORDAN_1_RETRO_HIGH_OG_UNIVERSITY_BLUE_GS.jpg" alt="photo" />

      </div>
      <div className="item-name">
        {name}
      </div>
      <div className="item-color">
        {color}
      </div>
      <div className="item__counter">
        <button className="counter-plus" onClick={() => setCount(count + 1)} >
          &#43;
        </button>
        <div className="counter-number">
          {count}
        </div>
        <button className="counter-minus" onClick={() => setCount(count - 1)} >
          &#8722;
        </button>
      </div>
      <div className="item-price">
        {price}
      </div>
    </div >
  );
};

export default Item;