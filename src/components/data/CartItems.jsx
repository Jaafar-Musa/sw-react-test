import React, { Component } from "react";
import CartItemsToggle from "../buttons/CartItemsToggle";
import ColorAttribute from "../buttons/ColorAttribute";
import SizeAttribute from "../buttons/SizeAttribute";

export default class CartItems extends Component {
  render() {
    return (
      <section className="CartItems">
        <div className="CartItems__Info">
          <div className="CartItems__InfoOptions">
            <h3>Appollo</h3>
            <h4>Shirtttt</h4>
            <p>$50.00</p>
            <div className="Sizes">
              <p>Sizes:</p>
                <SizeAttribute />
            </div>
            <div className="Colors">
              <p>Colors:</p>
              <ColorAttribute/>
            </div>
          </div>
          <div className="CartItems__InfoAmount">
            <CartItemsToggle value="+" />
            <span>3</span>
            <CartItemsToggle value={"-"} />
          </div>
        </div>
        <div className="CartItems__Imgs">I</div>
      </section>
    );
  }
}
