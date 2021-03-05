import React, { Component } from 'react'
import "./CartColumns.css"

export default class CartColumns extends Component {
    render() {
        return (
            <div class="columns">
                <div className="column">
                    <p>Products</p>
                </div>
                <div className="column">
                    <p>Product Name</p>
                </div>
                <div className="column">
                    <p>price</p>
                </div>
                <div className="column">
                    <p>quantity</p>
                </div>
                <div className="column">
                    <p>remove</p>
                </div>
                <div className="column">
                    <p>total</p>
                </div>
            </div>
        )
    }
}
