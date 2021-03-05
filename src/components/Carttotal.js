import React from 'react'
import "./cartTotal.css"

export default function Carttotal({value}) {
    const {cartTotal,cartsubTotal,cartTax}=value;
    return (
        <>
            <div className="bill">
                 <h5 className="subTotal">
                     SubTotal:<strong>${cartsubTotal}</strong>
                 </h5>
                 <h5 className="tax">
                     Tax:<strong>${cartTax}</strong>
                 </h5>
                 <h5 className="total">
                     Total:<strong>${cartTotal}</strong>
                 </h5>
                 <button>Place Order</button>
            </div>
        </>
    )
}
