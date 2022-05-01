import React, { Component } from 'react'
import PropTypes from "prop-types"

class ProductCard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className='ProductCard'>
          <div className="ProductCard__Image">
            <img src={this.props.imgUrl}/>
          </div>
          <div className="ProductCard__Desc">
              <span>{this.props.brand}</span>
              <p>$50.00</p>
          </div>
      </div>
    )
  }
}
ProductCard.propTypes ={
  imgUrl:PropTypes.string.isRequired,
  brand:PropTypes.string.isRequired,
}

export default ProductCard