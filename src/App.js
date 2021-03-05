import React from 'react'
import Header from "./Header"
import Home from "./Home"
import Detail from './Detail'
import Cart from './components/Cart'
import Default from './Default'
import Modal from "./Modal"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
      <Switch>
         <Route exact path="/">
          <Home/>
         </Route>
         <Route path="/details">
           <Detail/>
         </Route>
         <Route path="/cart">
            <Cart/>
         </Route>
         <Route component={Default}/>
      </Switch>
      <Modal/>
      </div>
    </Router>
  )
}

export default App

