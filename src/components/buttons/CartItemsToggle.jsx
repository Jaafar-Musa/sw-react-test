import React, { Component } from "react";
import PropTypes from "prop-types";

class CartItemsToggle extends Component {
  render() {
    //todo: -
    return <button className="CartItemsToggle">{this.props.value}</button>;
  }
}
CartItemsToggle.propTypes = {
  value: PropTypes.string.isRequired,
};
export default CartItemsToggle;
