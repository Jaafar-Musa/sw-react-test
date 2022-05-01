import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";

class NavLink extends Component {
  render() {
    return (
      <Link
        to={this.props.to}
        className={({ isActive }) => (isActive ? "Links__Active" : undefined)}
        style={({ isActive }) => (isActive ? {color:"#5ECE7B"} : undefined)}
      >
        {this.props.text}
      </Link>
    );
  }
}
NavLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};

export default NavLink;
