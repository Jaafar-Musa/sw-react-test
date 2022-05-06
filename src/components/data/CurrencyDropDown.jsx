import React, { Component } from "react";
import CurencyBtn from "../buttons/CurencyBtn";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCurrency } from "../../actions";

class CurrencyDropDown extends Component {
  HandleClick(val) {
    this.props.setCurrency(val);
  }

  render() {
    const { currency } = this.props;
    const currencies = this.props.currencies;
    return (
      <div className="CurrencyDropDown">
        {currencies.map((val, i) => {
          const cur = val.symbol.concat(" ", val.label);
          return (
            <CurencyBtn
              currency={cur}
              key={i}
              active={currency.label === val.label}
              handleClick={() => {
                this.HandleClick(val);
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
