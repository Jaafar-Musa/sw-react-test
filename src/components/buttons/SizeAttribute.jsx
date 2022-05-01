import React, { Component } from "react";

// todo: n r n l nn Margin error
export default class SizeAttribute extends Component {
  render() {
    return (
      <div className="SizeAttribute">

        <form onChange={()=>console.log("test")}>
          <div className="SizeAttribute__Selection">
            <input type="radio" className="test" name="te" data-size="S"/>
            <span>S</span>
          </div>

          <div className="SizeAttribute__Selection">
            <input type="radio" className="test" name="te" data-size="X"/>
            X
          </div>

        </form>

      </div>
    );
  }
}
