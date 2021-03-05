import React, { Component } from 'react'
import {ProductConsumer} from "./Context"
import {Link} from "react-router-dom"
import "./Modal.css"

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
               {
                   (value)=>{
                        const {modalOpen,closeModal}=value;
                        const {img,title,price}=value.modalProduct;
                        if(!modalOpen){
                            return null
                        }
                        else{
                            return(
                                <div className="container">
                                    <div id="modal">
                                        <h5 className="heading">Item Added To Cart</h5>
                                        <img src={img} alt="modal"/>
                                        <h5 className="title">{title}</h5>
                                        <h5 className="price">${price}</h5>
                                    <div className="buttons">
                                    <Link to="/" >
                                            <button className="btn" onClick={()=>{
                                                closeModal();
                                            }}>
                                              Back To Shopping
                                            </button>
                                        </Link>
                                        <Link to="/cart">
                                            <button  className="btn" onClick={()=>{
                                                closeModal();
                                            }}>Go To Cart</button>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            )
                        }
                   }
               }
            </ProductConsumer>
        )
    }
}
