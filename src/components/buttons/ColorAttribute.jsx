import React, { Component } from "react";
import PropTypes from "prop-types";

class ColorAttribute extends Component {
  render() {
    const { attributes, name, onChange, selected, min } = this.props;
    return (
      <div className={`ColorAttribute ${min ? "min" : null}`}>
        <h4>{name && name + ":"} </h4>
        <form
          onChange={(e) => {
            onChange(e);
          }}
        >
          {attributes &&
            attributes.map((v, i) => {
              return (
                <div
                  className="ColorAttribute__Selection"
                  style={{ backgroundColor: v.value }}
                  key={i}
                >
                  <input
                    type="radio"
                    name={name}
                    value={v.value}
                    defaultChecked={v.value === selected}
                  />
                </div>
              );
            })}
        </form>
      </div>
    );
  }
}
ColorAttribute.propTypes = {
  attributes: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func,
  min: PropTypes.bool,
};

export default ColorAttribute;
