import React, { Component } from "react";
import PropTypes from "prop-types";
import EmptyCart from "./../svg/EmptyCart";

class ProductCard extends Component {
  state = {
    onHover: false,
  };
  render() {
    const {
      inStock,
      brand,
      price,
      imgUrl,
      handleCardClick,
      handleCartClick,
      name,
    } = this.props;
    return (
      <div
        className="ProductCard"
        onMouseEnter={() => this.setState({ onHover: true })}
        onMouseLeave={() => this.setState({ onHover: false })}
        onClick={() => handleCardClick()}
      >
        {!inStock && <div className="ProductCard__OOS">OUT OF STOCK</div>}
        <div className="ProductCard__Image">
          <img src={imgUrl} alt={brand} />
        </div>
        <div className="ProductCard__Desc">
          <div
            className={`ProductCard__Desc__Cart ${
              this.state.onHover && inStock ? "Flex" : undefined
            }`}
            onClick={(e) => handleCartClick(e)}
          >
            <EmptyCart />
          </div>
          <span>{brand.concat(" ", name)}</span>
          <p>{price}</p>
        </div>
      </div>
    );
  }
}
ProductCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  inStock: PropTypes.bool.isRequired,
  handleCardClick: PropTypes.func,
  handleCartClick: PropTypes.func,
};

export default ProductCard;
