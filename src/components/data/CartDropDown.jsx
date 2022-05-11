import React, { Component } from "react";
import { connect } from "react-redux";
import withParam from "../../utils/useParams";
import CartItems from "./CartItems";

class CartDropDown extends Component {
  state = {
    totalPrice: 0,
  };

  TotalPrice() {
    if (this.props.cart.length !== 0) {
      let map = this.props.cart.map((v) => {
        let [p] = v.prices.filter(
          (v) => v.currency.label === this.props.currency.label
        );
        return p.amount * v.cartAmount;
      });
      let total = map.reduce((prev, cur) => {
        return prev + cur;
      });
      return this.setState({ ...this.state, totalPrice: total });
    }
    this.setState({ ...this.state, totalPrice: 0 })
  }
  componentDidMount() {
    this.TotalPrice();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.cart !== this.props.cart ||
      prevProps.currency !== this.props.currency
    ) {
      this.TotalPrice();
    }
  }

  render() {
    const { cart, navigate, currency } = this.props;
    return (
      <div className="CartDropDown">
        <div className="CartDropDown__Bag">
          <p>
            My Bag: <span>{cart.length} items</span>
          </p>
        </div>
        <div className="CartDropDown__Items">
          {cart.slice(cart.length - 2).map((v, i) => {

            let [prices] = v.prices.filter(
              (v) => v.currency.label === currency.label
            );
            const { name, brand, cartAmount, attributes, id, gallery } = v;
            return (
              <CartItems
                key={i}
                name={name}
                brand={brand}
                price={currency.symbol.concat(" ", prices.amount)}
                cartAmount={cartAmount}
                attributes={attributes}
                gallery={gallery}
                min
                id={id}
              />
            );
          })}
        </div>
        <div className="CartDropDown__Price">
          <span>Total</span>
          <p>{currency.symbol.concat(" ", this.state.totalPrice.toFixed(2))}</p>
        </div>
        <div className="CartDropDown__Buttons">
          <button
            onClick={() => {
              navigate("/cart");
            }}
          >
            VIEW BAG
          </button>
          <button>CHECK OUT</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    currency: state.currency,
  };
};

export default connect(mapStateToProps)(withParam(CartDropDown));
