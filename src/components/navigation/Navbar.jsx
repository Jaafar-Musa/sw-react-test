import React, { Component } from "react";
import NavLink from "../buttons/NavLink";
import DropdownBtn from "../buttons/DropdownBtn";
import Logo from "../svg/Logo";
import EmptyCart from "../svg/EmptyCart";
import CurrencyDropDown from "../data/CurrencyDropDown";
import CartDropDown from "../data/CartDropDown";
import { graphql } from "@apollo/client/react/hoc";
import { NAV_DATA } from "../../graphql/navQuery";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    const { currencies, networkStatus, categories } = this.props.data;
    return (
      <nav>
        <ul className="Links">
          {networkStatus === 7 ? (
            categories.map((val, i) => {
              let { name } = val;
              return (
                <NavLink
                  to={`/categories/${name}`}
                  text={name.charAt(0).toUpperCase() + name.slice(1)}
                  key={i}
                />
              );
            })
          ) : (
            <NavLink to={`/categories/all`} text={"All"} />
          )}
        </ul>
        <span>
          <Logo />
        </span>

        <ul className="Links">
          <DropdownBtn
            value={"$"}
            dropdown
            dropdownContent={
              <CurrencyDropDown
              currencies={
                currencies === undefined ? [this.props.currency] : currencies
              }
              />
            }
            />
          <DropdownBtn
            countIcon={this.props.cart.length}
            value={<EmptyCart />}
            dropdownContent={<CartDropDown />}
            backdrop
          />
        </ul>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    cart:state.cart,
  };
};

export default connect(mapStateToProps)(graphql(NAV_DATA)(Navbar));
