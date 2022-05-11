import React, { Component } from "react";
import { connect } from "react-redux";
import SizeAttribute from "./../components/buttons/SizeAttribute";
import ColorAttribute from "./../components/buttons/ColorAttribute";
import { Query } from "@apollo/client/react/components";
import Loading from "../components/data/Loading";
import withParam from "../utils/useParams";
import { GET_PRODUCT } from "../graphql/productQuery";
import { addToCart } from "../actions";

class ProductDescription extends Component {
  state = {
    mainImg: 0,
    product: {},
    updatedAttributes: [],
  };
  //todo refactor
  handleChange(e, i, product) {
    const val = e.target.value;
    let array = [];
    if (this.state.updatedAttributes.length === 0) {
      const updatedAtt = product.attributes.map((v, index) => {
        return index === i ? { ...v, selected: val } : v;
      });
      array = updatedAtt;
    } else {
      const updatedAtt = this.state.updatedAttributes.map((v, index) => {
        return index === i ? { ...v, selected: val } : v;
      });
      array = updatedAtt;
    }

    this.setState({
      ...this.state,
      product: { ...product, attributes: array },
      updatedAttributes: array,
    });
  }

  attributesSelected() {
    const prod = this.state.product;
    if (Object.keys(prod).length !== 0) {
      const attr = prod.attributes;
      const isSelected = attr.filter((v) => v.hasOwnProperty("selected"));
      return attr.length === isSelected.length;
    }
    return false;
  }

  render() {
    let id = this.props.match.param.name;
    let { currency, addToCart } = this.props;
    return (
      <div className="ProductDescription">
        <Query query={GET_PRODUCT} variables={{ id }}>
          {({ data, loading, error }) => {
            if (loading) return <Loading />;
            if (error) return <Loading />;
            const {
              gallery,
              description,
              prices,
              attributes,
              inStock,
              name,
              brand,
            } = data.product;
            const price = prices.filter(
              (v) => v.currency.label === currency.label
            );
            return (
              <>
                <div className="ProductDescription__Gallery">
                  <div className="ProductDescription__Gallery__Side">
                    {gallery.map((v, i) => {
                      return (
                        <img
                          src={v}
                          key={i}
                          onClick={() => {
                            this.setState({ ...this.state, mainImg: i });
                          }}
                        />
                      );
                    })}
                  </div>
                  <div className="ProductDescription__Gallery__Main">
                    <img src={gallery[this.state.mainImg]} alt="" />
                  </div>
                </div>
                <div className="ProductDescription__Info">
                  <div className="titles">
                    <h3>{name}</h3>
                    <span>{brand}</span>
                  </div>
                  <div className="attributes">
                    {attributes.map((v, i) => {
                      if (v.type === "text")
                        return (
                          <SizeAttribute
                            attributes={v.items}
                            name={v.name}
                            key={i}
                            onChange={(e) => {
                              this.handleChange(e, i, data.product);
                            }}
                          />
                        );

                      return (
                        <ColorAttribute
                          key={i}
                          attributes={v.items}
                          name={v.name}
                          onChange={(e) => {
                            this.handleChange(e, i, data.product);
                          }}
                        />
                      );
                    })}
                  </div>
                  <div className="price">
                    <p>Price:</p>
                    <span>
                      {price
                        ? currency.symbol.concat(" ", price[0].amount)
                        : currency.symbol.concat(" ", "0.00")}
                    </span>
                  </div>
                  <div className="button">
                    <button
                      disabled={
                        !inStock
                          ? true
                          : attributes.length === 0
                          ? false
                          : this.attributesSelected()
                          ? false
                          : true
                      }
                      onClick={() => {
                        if (Object.keys(this.state.product).length === 0) {
                          this.props.addToCart({
                            ...data.product,
                            cartAmount: 1,
                            id: Math.floor(Math.random() * 100000),
                          });
                          return this.props.navigate("/cart");
                        }
                        this.setState(
                          {
                            ...this.state,
                            product: {
                              ...this.state.product,
                              cartAmount: 1,
                              id: Math.floor(Math.random() * 100000),
                            },
                          },
                          () => {
                            addToCart(this.state.product);
                            this.props.navigate("/cart");
                          }
                        );
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></div>
                </div>
              </>
            );
          }}
        </Query>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (e) => dispatch(addToCart(e)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withParam(ProductDescription));
