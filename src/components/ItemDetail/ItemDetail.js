import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";
import { CartContext } from '../Cart/CartContext';

const ItemDetail = ({item}) => {
  const [itemCount, setItemCount] = useState(0);
  const ctx = useContext(CartContext);

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items!");
    setItemCount(qty);
    ctx.addItem(item, qty);
  }

  return (
    <>
      {
        <div className="d-flex">
          <section>
            <img src={item.img} className="img-detail" alt={item.title} />
          </section>

          <section className="column">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>Model: {item.modelId}</p>
            <h3>${item.cost}</h3>
            <h5 className="card-subtitle mb-2 text-muted">Stock: {item.stock}</h5>
          </section>
        </div>
      }
      {
        itemCount === 0 
        ? <ItemCount initial={itemCount} stock={item.stock} onAdd={onAdd} />
        : <Link to="/cart"><button type="button" className="btn btn-danger">Checkout</button></Link>
      }
    </>
  );
}

export default ItemDetail