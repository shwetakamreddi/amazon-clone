import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import  ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom"
import {ProductConsumer} from "./Context"

function Header() {

    return (
        <div className="header">
         <Link to="/">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" className="header__logo"/>
         </Link>
            <div className="header__search">
               <input className="header_searchInput" type="text"/>
               <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                   <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        &Orders
                    </span>
                 </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
              <ProductConsumer>
                   {
                       (value)=>{
                        const {length} =value.cart;
                           return(
                            <Link to="/cart">
                                <div className="header__optionBasket">
                                   <ShoppingBasketIcon/>
                                   <span className="header__basketCount">{length}</span>
                               </div>
                             </Link>
                           )
                       }
                   }
              </ProductConsumer>
            </div>
        </div>
    )
}

export default Header
