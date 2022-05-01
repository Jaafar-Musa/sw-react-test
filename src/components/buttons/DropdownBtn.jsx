import React, { Component } from "react";
import Dropdown from "../navigation/Dropdown";
import UpDownArrows from "../svg/UpDownArrows";

export default class DropdownBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  HandleClick = ()=>{
    this.setState((prevState) => ({
      ...prevState,
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    return (
      <div className="DropdownBtn">
        <button
          onClick={this.HandleClick}
        >
          {this.props.value} {this.props.dropdown ? <UpDownArrows /> : null}
        </button>
        {this.props.dropdownContent && (
          <Dropdown open={this.state.dropdownOpen}>
            {this.props.dropdownContent}
          </Dropdown>
        )}
      </div>
    );
  }
}
