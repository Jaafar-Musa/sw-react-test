import React, { Component } from 'react'
import CartItems from './CartItems'

export default class CartDropDown extends Component {
  render() {
    return (
      <div className='CartDropDown'>
          <CartItems/>
      </div>
    )
  }
}
