import React from 'react'
import './ItemCount.css'
import { useState, useEffect } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [ItemCount, setCount] = useState(initial);
    const [addTheCart, setAddCart] = useState(false);
    
    const sumar = () => {
        if (ItemCount < stock){ 
            setCount(ItemCount + 1);
        }
    }

    const restar = () => {
      if(ItemCount > initial) {
        setCount(ItemCount - 1);
      }
    };

    const addCart = () => {
      setCount(ItemCount);
      setAddCart(!addTheCart);
    };

    useEffect(() => {
      return () => {
        <>
            <h1>Carrito</h1>
        </>
      }

    },[addTheCart]); //! Array de dependencias
    
  return (
    <div className="container">
      <button onClick={() => restar()} type="button" className="btn btn-primary btn-count">-</button>
      <span className="btn-count">{ItemCount}</span>
      <button onClick={() => sumar()} type="button" className="btn btn-primary btn-count">+</button>
      <button onClick={() => onAdd(ItemCount)} type="button" className="btn btn-primary btn-cart">Add to Cart</button>
    </div>
  );
}

export default ItemCount