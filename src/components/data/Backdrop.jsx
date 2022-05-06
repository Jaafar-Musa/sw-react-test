import React, { Component } from 'react'
import { connect } from 'react-redux'

class Backdrop extends Component {
  render() {
    const {backdrop} = this.props
    return (
      <div className={`${backdrop ? "Backdrop" : null}`}></div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    backdrop:state.backdrop
  }
}

export default connect(mapStateToProps)(Backdrop)