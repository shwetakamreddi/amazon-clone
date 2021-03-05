import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {ProductConsumer} from "./Context"
import "./Product.css"

export default class Product extends Component {
    render() {
        const {id,title,price,rating,img,inCart}=this.props.product;
        return (
        <div className="product">
          <ProductConsumer>
          {
            (value)=>(
                <div className="product__info" onClick={()=>value.handleDetail(id)}>
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small><strong>{price}</strong>
                </p>
                <div className="product__rating">
                  {
                      Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                      ))
                  }
                </div>
                <Link to="/details">
                   <img src={img} alt="book"/>
                </Link>
                <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{
                            value.addToCart(id);
                            value.openModal(id);
                        }}>
                            {inCart?(<p className="text-capitalize mb-0"
                         disabled>in cart</p>):<p>Add to Cart</p>}
                </button>
            </div>
            )
          }
          </ProductConsumer>
        </div>
        )
    }
}


    


