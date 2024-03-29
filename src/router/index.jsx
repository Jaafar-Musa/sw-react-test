import React, { Component } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Layout from "../pages/Layout";
import ProductDescription from "../pages/ProductDescription";
import ProductListing from "../pages/ProductListing";

export default class Routing extends Component {
  render() {
    //   const param = use
    //   const wrapper = (component) =>{
    //       return props => <Component {...props} 
    //   }
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>

              <Route path="/" element={<Navigate to={"/categories/all"}/>}/>
              <Route path="/categories/:id" element={<ProductListing/>}/>
              <Route path="/categories/:id/:name" element={<ProductDescription/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Route>
        </Routes>
      </Router>
    );
  }
}
