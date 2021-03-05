import React from 'react'
import "./Home.css"
import Product from "./Product"
import {ProductConsumer} from "./Context"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Home page"/>
                <div className="home__row">
                   <ProductConsumer>
                       {
                           (value)=>{
                               return value.products.map((product)=>{
                                   return <Product key={product.id} product={product}/>
                               })
                           }
                       }
                   </ProductConsumer>
                </div>
            </div>
        </div>
    )
}

export default Home
