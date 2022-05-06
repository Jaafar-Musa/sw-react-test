import React, { Component } from "react";
import Loading from "../components/data/Loading";
import ProductCard from "../components/data/ProductCard";
import withParam from "../utils/useParams";
import { GET_CATEGORIES } from "../graphql/categoriesQuery";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";

class ProductListing extends Component {
  //todo pass product id instead
  handleCardClick(product) {
    this.props.navigate(`/categories/${this.props.match.param.id}/${product.id}`);
  }
  handleCartClick(product){
    if(product.attributes.length < 1){

    }
    this.handleCardClick(product)
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
                        handleCardClick={()=>this.handleCardClick(v)}
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


export default connect(
  mapStateToProps,
)(withParam(ProductListing));
