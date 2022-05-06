import React, { Component } from "react";
import CartItems from "./CartItems";

export default class CartDropDown extends Component {
  render() {
    return (
      <div className="CartDropDown">

        <div className="CartDropDown__items">
          <CartItems />
        </div>
        <div className="CartDropDown__Buttons">
          <button>VIEW BAG</button>
          <button>CHECK OUT</button>
        </div>
      </div>
    );
  }
}
