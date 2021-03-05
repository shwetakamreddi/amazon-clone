import React from 'react'
import "./CartItem.css"

export default function ProductItem({item,value})
{
    const {id,img,price,total,title,count}=item;
    const {increment,decrement,removeItem}=value;
    return (
        <div className="item">
            <div className="img">
                <img src={img} alt="item"/>
            </div>
            <div className="title">
                <p>{title}</p>
            </div>
            <div className="price">
                <p>${price}</p>
            </div>
            <div className="quantity">
                <span className="btn-black" onClick={()=>{
                    decrement(id)
                }}>
                    -
                </span>
                <span className="btn-black">
                    {count}
                </span>
                <span className="btn-black" onClick={()=>{
                    increment(id)
                }}>
                    +
                </span>
            </div>
            <div className="remove" onClick={()=>{
                removeItem(id)
            }}>
                <button>Delete</button>
            </div>
            <div className="total">
                <strong>${total}</strong>
            </div>
        </div>
    )
}
