import React, { Component } from "react";
import CurencyBtn from "../buttons/CurencyBtn";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCurrency } from "../../actions";

class CurrencyDropDown extends Component {
  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
  }
  HandleClick(val) {
    this.props.setCurrency(val);
  }

  componentDidMount() {
    this.dropdownRef.current.focus();
  }

  render() {
    const { currency } = this.props;
    const { currencies, close } = this.props;
    return (
      <div
        className="CurrencyDropDown"
        onBlur={() => close()}
        tabIndex={1}
        ref={this.dropdownRef}
      >
        {currencies.map((val, i) => {
          const cur = val.symbol.concat(" ", val.label);
          return (
            <CurencyBtn
              currency={cur}
              key={i}
              active={currency.label === val.label}
              handleClick={() => {
                this.HandleClick(val);
                close()
              }}
            />
          );
        })}
      </div>
    );
  }
}
CurrencyDropDown.propTypes = {
  currencies: PropTypes.array.isRequired,
  close: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrency: (e) => dispatch(setCurrency(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropDown);
