import React, { Component } from "react";
import Dropdown from "../navigation/Dropdown";
import UpDownArrows from "../svg/UpDownArrows";
import PropTypes from "prop-types";
import { toggleBackdrop } from "../../actions";
import { connect } from "react-redux";

class DropdownBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  componentWillUnmount() {
    this.setState({ dropdownOpen: false });
  }

  HandleClick = () => {
    if (this.props.backdrop) {
      this.props.toggleBackdrop(true);
    }
    this.setState((prevState) => ({
      ...prevState,
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };
  HandleClose = () => {
    this.setState({ ...this.state, dropdownOpen: false },()=>this.props.toggleBackdrop(false));

  };
  render() {
    const { countIcon, dropdown, value, dropdownContent } = this.props;
    return (
      <div className="DropdownBtn">
        {countIcon > 0 && <div className="DropdownBtn__Counter"><p>{countIcon}</p></div>}
        <button onClick={this.HandleClick}>
          {value} {dropdown ? <UpDownArrows /> : null}
        </button>
        {dropdownContent && (
          <Dropdown open={this.state.dropdownOpen}>
            {React.cloneElement(dropdownContent, { close: this.HandleClose })}
          </Dropdown>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleBackdrop: (e) => dispatch(toggleBackdrop(e)),
  };
};

DropdownBtn.propTypes = {
  dropdown: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  backdrop: PropTypes.bool,
  countIcon: PropTypes.number,
};

export default connect(null, mapDispatchToProps)(DropdownBtn);
