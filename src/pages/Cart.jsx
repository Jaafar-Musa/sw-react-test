import React, { Component } from "react";
import { connect } from "react-redux";
import CartItems from "../components/data/CartItems";

class Cart extends Component {

  state = {
    totalPrice:0,
  }
  
  TotalPrice(){
    if(this.props.cart.length !== 0 ){
      let map = this.props.cart.map(v=>{
        let [p] = (v.prices.filter((v) => v.currency.label === this.props.currency.label))
        return p.amount * v.cartAmount
      })
      let total = map.reduce((prev,cur)=>{
        return prev + cur
      })
      this.setState({...this.state, totalPrice: total})
    }
  }
  componentDidMount(){
    this.TotalPrice()

  }
  componentDidUpdate(prevProps){
    if(prevProps.cart !== this.props.cart || prevProps.currency !== this.props.currency){
      this.TotalPrice()
    }
  }
  render() {
    const { currency, cart } = this.props;
    return (
      <section className="Cart">
        <div className="Cart__Title">
          <h1>Cart</h1>
        </div>
        {cart.length < 1 && (
          <div className="Cart__NoItems">
            <h1>No Items Added</h1>
          </div>
        )}
        {cart.length !== 0 && (
          <>
            <div className="Cart__Items">
              {cart &&
                cart.map((v, i) => {
                  let [prices] = v.prices.filter(
                    (v) => v.currency.label === currency.label
                  );
                    const {name, brand, cartAmount, attributes, id, gallery} = v
                  return (
                    <CartItems
                      key={i}
                      name={name}
                      brand={brand}
                      price={currency.symbol.concat(" ", prices.amount)}
                      cartAmount={cartAmount}
                      attributes={attributes}
                      id={id}
                      gallery={gallery}
                    />
                  );
                })}
            </div>
            <div className="Cart__Details">
              <span>
                Tax 21%: <p>{currency.symbol.concat(" ", (this.state.totalPrice * 0.21).toFixed(2))}</p>
              </span>
              <span>
                Quantity: <p>{cart.length}</p>
              </span>
              <span>
                Total: <p>{currency.symbol.concat(" ", this.state.totalPrice.toFixed(2))}</p>
              </span>
              <button>
                ORDER
              </button>
            </div>
          </>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    currency: state.currency,
  };
};

export default connect(mapStateToProps)(Cart);
