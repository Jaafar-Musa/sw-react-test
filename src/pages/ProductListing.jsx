import React, { Component } from "react";
import Loading from "../components/data/Loading";
import ProductCard from "../components/data/ProductCard";
import withParam from "../utils/useParams";
import { GET_CATEGORIES } from "../graphql/categoriesQuery";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import { addToCart } from "../actions";

class ProductListing extends Component {
  //todo pass product id instead
  handleCardClick(e, product, bool = false) {
    if (e.target !== e.currentTarget && !bool) return;
    this.props.navigate(
      `/categories/${this.props.match.param.id}/${product.id}`
    );
  }
  handleCartClick(e, product) {
    if (product.attributes.length === 0) {
      this.props.addToCart({
        ...product,
        cartAmount: 1,
        id: Math.floor(Math.random() * 100000),
      });
      this.props.navigate("/cart");
      return 1;
    }

    console.log("tt123");
    this.handleCardClick(e, product, true);
  }
  render() {
    let name = this.props.match.param.id;
    let { label, symbol } = this.props.currency;
    const title = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <section className="ProductListing">
        <div className="ProductListing__Title">
          <h4>{title}</h4>
        </div>
        <section>
          <Query
            query={GET_CATEGORIES}
            variables={{ input: { title: name === "explore" ? "all" : name } }}
          >
            {({ data, loading, error }) => {
              // todo handle error
              if (loading) return <Loading />;
              if (error) return <Loading />;
              return (
                <div className="ProductListing__Cards">
                  {data.category.products.map((v, i) => {
                    let [price] = v.prices.filter(
                      (v) => v.currency.label === label
                    );
                    return (
                      <ProductCard
                        imgUrl={v.gallery[0]}
                        brand={v.brand}
                        key={i}
                        price={symbol.concat(" ", price.amount)}
                        inStock={v.inStock}
                        handleCardClick={(e) => this.handleCardClick(e, v,true)}
                        handleCartClick={(e) => this.handleCartClick(e, v)}
                      />
                    );
                  })}
                </div>
              );
            }}
          </Query>
        </section>
      </section>
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
)(withParam(ProductListing));
