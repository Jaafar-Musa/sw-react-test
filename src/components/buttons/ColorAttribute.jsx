import React, { Component } from "react";
import PropTypes from "prop-types";

class ColorAttribute extends Component {
  render() {
    const { attributes, name,onChange } = this.props;
    return (
      <div className="ColorAttribute">
        <h4>{name && name + ":"} </h4>
        <form onChange={(e)=>{onChange(e)}}>
          {attributes &&
            attributes.map((v, i) => {
              return (
                <div
                  className="ColorAttribute__Selection"
                  style={{ backgroundColor: v.value }}
                  key={i}
                >
                  <input type="radio" name={name} value={v.value} />
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
  onChange:PropTypes.func
};

export default ColorAttribute;
