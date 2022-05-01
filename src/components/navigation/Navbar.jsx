import React, { Component } from "react";
import NavLink from "../buttons/NavLink";
import DropdownBtn from "../buttons/DropdownBtn";
import Logo from "../svg/Logo";
import EmptyCart from "../svg/EmptyCart";
import CurrencyDropDown from "../data/CurrencyDropDown";
import CartDropDown from "../data/CartDropDown";
import { graphql } from "@apollo/client/react/hoc";
import { NAV_DATA } from "../../graphql/navQuery";
import Loading from "../data/Loading";

class Navbar extends Component {
  render() {
    const { currencies, networkStatus, categories } = this.props.data;
    // const
    if (networkStatus !== 7) return <Loading />;
    return (
      <nav>
        <ul className="Links">
          {categories.map((val, i) => {
            let { name } = val;
            return name === "all" ? (
              <NavLink to={`/categories/explore`} text={"Explore"} key={i}/>
            ) : (
              
              <NavLink to={`/categories/${name}`} text={name.charAt(0).toUpperCase() + name.slice(1)} key={i}/>
            );
          })}
        </ul>
        <span>
          {/* <img src={Logo} /> */}
          <Logo />
        </span>

        <ul className="Links">
          <DropdownBtn
            value={"$"}
            dropdown
            dropdownContent={<CurrencyDropDown currencies={currencies} />}
          />
          <DropdownBtn
            value={<EmptyCart />}
            dropdownContent={<CartDropDown />}
          />
        </ul>
      </nav>
    );
  }
}

export default graphql(NAV_DATA)(Navbar);
