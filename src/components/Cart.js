import React, { Component } from 'react'
import "./Cart.css"
import {ProductConsumer} from "../Context"
import CartColumns from "./CartColumns"
import CartList from "./CartList"
import Carttotal from "./Carttotal"
import CartEmpty from "./CartEmpty"

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {
                        (value)=>{
                            const {cart}=value;
                            if(cart.length>0){
                                return(
                                    <>
                                        <h1>Your Cart</h1>
                                        <CartColumns/>
                                        <CartList value={value}/>
                                        <Carttotal value={value}/>
                                    </>
                                )
                            }
                            else{
                                return(
                                  <CartEmpty/>
                                )
                            }
                        }
                    }
                </ProductConsumer>
            </section>
        )
    }
}
