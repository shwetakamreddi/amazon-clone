import React from 'react'
import {ProductConsumer} from "./Context"
import {Link} from "react-router-dom"
import "./Detail.css"

export default function Detail() {
    return (
        <ProductConsumer>
           {
               (value)=>{
                   const {id,title,price,rating,img,inCart}=value.detailProduct;
                   return(
                    <>
                      <h1 className="detail_title">Product Detail</h1>
                       <div className="detailWrapper">
                            <div className="left">
                                <img src={img} alt="detail"/>
                            </div>
                            <div className="right">
                                <h1 className="title">{title}</h1>
                                 <h4>
                                    Price: <span>$</span> <strong>{price}</strong>
                                 </h4>
                                 <div className="product__rating">
                                       {
                                           Array(rating).fill().map((_,i)=>(
                                           <p>⭐</p>
                                             ))
                                        }
                                  </div>
                                  <div className="btn">
                                             <Link to="/">
                                                <button className="back-btn">Back to Shoppings</button>
                                             </Link>
                                         <button className="back-btn"  disabled={inCart?true:false}
                                         onClick={()=>{
                                             value.addToCart(id)
                                         }}>
                                             {inCart?"InCart":"Add to cart"}
                                         </button>
                                  </div>
                            </div>
                       </div>
                    </>
                   )
               }
           }
        </ProductConsumer>
    )
}
