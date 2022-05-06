import React, { Component } from "react";
import PropTypes from "prop-types";

class CurencyBtn extends Component {
  render() {
    const { active, currency, handleClick } = this.props;
    return (
      <div
        className={`${active ? "Active" : null} CurencyBtn`}
        onClick={() => {
          return handleClick();
        }}
      >
        {currency}
      </div>
    );
  }
}

CurencyBtn.propTypes = {
  currency: PropTypes.string.isRequired,
  active: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default CurencyBtn;
