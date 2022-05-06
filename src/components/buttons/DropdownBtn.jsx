import React, { Component } from "react";
import Dropdown from "../navigation/Dropdown";
import UpDownArrows from "../svg/UpDownArrows";
import PropTypes from "prop-types"
import { toggleBackdrop } from "../../actions";
import { connect } from "react-redux";

class DropdownBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  HandleClick = ()=>{
    if(this.props.backdrop){
      this.props.toggleBackdrop()
    }
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


const mapDispatchToProps = (dispatch)=>{
  return {
    toggleBackdrop:()=>dispatch(toggleBackdrop())
  }
}

DropdownBtn.propTypes = {
  dropdown:PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string,PropTypes.element]),
  backdrop:PropTypes.bool,
}


export default connect(null,mapDispatchToProps)(DropdownBtn)
