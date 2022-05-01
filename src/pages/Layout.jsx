import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

export default class Layout extends Component {

  render() {
    return (
      <section className="Layout">
        <Navbar />
        <section className="Layout__Children"><Outlet/></section>
      </section>
    );
  }
}
