import React, { Component } from "react";
import CurencyBtn from "../buttons/CurencyBtn";

export default class CurrencyDropDown extends Component {
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
