import React from 'react'
import './Item.css'
import { Link } from "react-router-dom";

const Item = ({img, title, cost, id, stock}) => {
  return (
    <>
        <div className="card">
            <img src={img} className="card-img-top img-item" alt="images cards" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${cost}</p>
                <p className="card-text text-muted">Stock: {stock}</p>
                <Link to={`/item/${id}`}><a className="btn btn-primary">+ Details</a> </Link>
            </div>
        </div>
    </>
  )
}

export default Item