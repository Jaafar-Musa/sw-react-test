import React, { Component } from "react";
import PropTypes from "prop-types";

class Dropdown extends Component {
  render() {
    return (
      <div
        className="Dropdown"
      >
       {
         this.props.open &&
        <div className="Dropdown__Content">{this.props.children}</div> 
      } 
      </div>
    );
  }
}
Dropdown.propTypes = {
  open: PropTypes.bool.isRequired,
};
export default Dropdown;
