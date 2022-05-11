import React, { Component } from "react";
import ColorAttribute from "../buttons/ColorAttribute";
import SizeAttribute from "../buttons/SizeAttribute";
import PropTypes from "prop-types";
import {
  increaseCartAmount,
  reduceCartAmount,
  removeFromCart,
  updateCart,
} from "../../actions";
import { connect } from "react-redux";

class CartItems extends Component {
  state = {
    mainImg: 0,
  };

  handleAttributeChange(e, attributes, id) {
    let value = e.target.value;
    let name = e.target.name;
    let updated = attributes.map((val) => {
      return val.id === name ? { ...val, selected: value } : val;
    });
    this.props.updateCart(updated, id);
  }

  handleAmount(e, id) {
    const name = e.target.name;
    if (this.props.cartAmount === 1 && name === "decrease") {
      return this.props.removeFromCart(id);
    }
    if (name === "increase") {
      return this.props.increaseCart(id);
    }
    this.props.reduceCart(id);
  }

  render() {
    const { name, brand, price, attributes, cartAmount, id, gallery, min } =
      this.props;
    return (
      <section className={`CartItems ${min ? "min" : null}`}>
        <div className="CartItems__Info">
          <div className="Details">
            <h3>{name}</h3>
            <h4>{brand}</h4>
            <p>{price}</p>
            <div className="Attributes">
              {attributes &&
                attributes.map((attribute, i) => {
                  if (attribute.type === "text") {
                    return (
                      <SizeAttribute
                        attributes={attribute.items}
                        name={attribute.id}
                        key={i}
                        selected={attribute.selected}
                        onChange={(e) =>
                          this.handleAttributeChange(e, attributes, id)
                        }
                        min={min}
                      />
                    );
                  }
                })}
            </div>
            <div className="Attributes">
              {attributes &&
                attributes.map((attribute, i) => {
                  if (attribute.type === "swatch")
                    return (
                      <ColorAttribute
                        min={min}
                        attributes={attribute.items}
                        name={attribute.name}
                        key={i}
                        selected={attribute.selected}
                        onChange={(e) =>
                          this.handleAttributeChange(e, attributes, id)
                        }
                      />
                    );
                })}
            </div>
          </div>
          <div className="Amount">
            <button name="increase" onClick={(e) => this.handleAmount(e, id)}>
              +
            </button>
            <span>{cartAmount}</span>
            <button name="decrease" onClick={(e) => this.handleAmount(e, id)}>
              -
            </button>
          </div>
        </div>
        <div className="CartItems__Imgs">
          <img src={gallery[this.state.mainImg]} alt="" />
          
        </div>
      </section>
    );
  }
}

CartItems.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cartAmount: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  min: PropTypes.bool,
  gallery: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (update, id) => dispatch(updateCart(update, id)),
    reduceCart: (id) => dispatch(reduceCartAmount(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    increaseCart: (id) => dispatch(increaseCartAmount(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItems);
