import React, { Component } from "react";

export default class ColorAttribute extends Component {
  render() {
    return (
      <div className="ColorAttribute">
        <form>
          <div
            className="ColorAttribute__Selection"
            style={{ backgroundColor: "black" }}
          >
            <input type="radio" name="test" />
          </div>
          <div
            className="ColorAttribute__Selection"
            style={{ backgroundColor: "blue" }}
          >
            <input type="radio" name="test" />
          </div>
        </form>
      </div>
    );
  }
}
