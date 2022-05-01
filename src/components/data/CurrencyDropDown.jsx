import React, { Component } from "react";
import CurencyBtn from "../buttons/CurencyBtn";
import PropTypes from "prop-types"



class CurrencyDropDown extends Component {
  render() {
    const currencies = this.props.currencies;
    return (
      <div className="CurrencyDropDown">
        {currencies.map((val, i) => {
          const cur = val.symbol.concat(" ", val.label)
          return <CurencyBtn currency={cur} key={i} />;
        })}
      </div>
    );
  }
}
CurrencyDropDown.propTypes = {
   currencies: PropTypes.array.isRequired
}

export default CurrencyDropDown
