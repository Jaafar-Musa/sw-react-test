import React, { Component } from "react";
import PropTypes from "prop-types";

// todo: n r n l nn Margin error
class SizeAttribute extends Component {
  render() {
    const { attributes, name,onChange } = this.props;
    return (
      <div className="SizeAttribute">
        <h4>{name && name + ":"} </h4>
        <form onChange={(e) =>onChange(e)}>
          {attributes &&
            attributes.map((v, i) => {
              let { displayValue, value } = v;
              return (
                <div className="SizeAttribute__Selection" key={i}>
                  <input
                    type="radio"
                    name={name}
                    value={value}
                    data-size={displayValue}
                  />
                  <span>{displayValue}</span>
                </div>
              );
            })}
        </form>
      </div>
    );
  }
}
SizeAttribute.propTypes = {
  attributes: PropTypes.array,
  name: PropTypes.string,
  onChange:PropTypes.func.isRequired
};

export default SizeAttribute;
