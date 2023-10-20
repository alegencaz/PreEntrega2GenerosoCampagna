import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import React, { useContext } from 'react'
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from 'firebase/firestore';
import db from '../utils/firebaseConfig'
import "./Cart.css"

const Cart = () => {
  const ctx = useContext(CartContext);

  const itemsForDB = ctx.cartList.map(item => ({
      id: item.id,
      title: item.title,
      price: item.cost,
      quantity: item.quantity,  
  }))

  const createOrder = async () => {
    let order = {
      buyer: {
        name: 'Lucas Alastuey',
        email: 'lucas@alastuey.com',
        phone: '123-456-1234'
      },
      items: itemsForDB,
      date: serverTimestamp(),
      total: ctx.totalCost()
    }
    
    const newOrderRef = doc(collection(db, "orders"));
    await setDoc(newOrderRef, order);

    ctx.cartList.forEach(async(item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment( - item.quantity)
      });
    });
    
    ctx.clear();

    alert('Your order has been created! This is your ID\'s order: ' + newOrderRef.id);
  }

  return (
    <>
        <h1 className='title-cart'>Your Cart</h1>
        <div>
          <Link to="/"><button type="button" className="btn btn-primary btn-continueShop">Continue Shopping</button></Link>
          {
            (ctx.cartList.length > 0) ?
            <button type="button" onClick={ctx.clear} className="btn btn-danger btn-deleteAllProducts">Delete all Products</button> :
            <h4>Your cart is empty</h4>
          }
        </div>

      <div className='d-flex'>
        <div className='item-cart'>{
          ctx.cartList.map(item => 
            <div className='d-flex'>
              <section>
                <img src={item.img} className="img-cart" alt={item.title} />
              </section>

              <section className='m-3'>
                  <p>Product: {item.title}</p>
                  <p>Stock: {item.stock}</p>
                  <button type="button" onClick={() => ctx.removeItem(item.id)}  className="btn btn-danger">Delete</button>
              </section>

              <section className='m-3 item-price '>
                <p>{item.quantity} Item(s)/${item.cost}</p>
                <p>${item.cost * item.quantity}</p>
              </section>  
            </div>
          )
        }
        </div>

        { 
          ctx.cartList.length > 0 &&
          <div className='container '>
            <section className='order-summary'>
                  <h3>Order Summary</h3>
                  <p>Subtotal: ${ctx.totalCost()}</p>
                  <h4>Total: ${ctx.totalCost()}</h4>
                  <button type="button" onClick={createOrder} className="btn btn-success">Finish Shopping</button>
            </section>
          </div>  
        } 
      </div>  
    </>
  )
}

export default Cart