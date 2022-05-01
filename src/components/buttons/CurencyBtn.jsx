import React, { Component } from 'react'

export default class CurencyBtn extends Component {
  render() {
    return (
      <div className='CurencyBtn'>{this.props.currency}</div>
    )
  }
}
