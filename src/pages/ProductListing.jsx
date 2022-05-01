import React, { Component } from "react";
import CartItems from "../components/data/CartItems";
import Loading from "../components/data/Loading";
import ProductCard from "../components/data/ProductCard";
import withParam from "../utils/useParams";
import { graphql } from "@apollo/client/react/hoc";
import { GET_CATEGORIES } from "../graphql/categoriesQuery";
import {Query} from "@apollo/client/react/components"
import client from "../graphql";
// import {} from "react-router-dom"

class ProductListing extends Component {

  render() {
    let name = this.props.match.param.id;
    const title = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <section className="ProductListing">
        <div className="ProductListing__Title">
          <h4>{title}</h4>
        </div>
        <section className="ProductListing__Cards">
          <ProductCard/>
          <Query query={GET_CATEGORIES} variables={{"input":{"title":name === "explore" ? "all" : name}}}>
            {({data, loading})=>{
              console.log(loading)
              if(loading) return <Loading/>
              
              return data.category.products.map((v,i)=>{
                 return <ProductCard imgUrl={v.gallery[0]}/>
              })
            }}
          </Query>
        </section>
      </section>
    );
  }
}

export default withParam(ProductListing);
