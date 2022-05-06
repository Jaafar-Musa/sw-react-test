import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Backdrop from "./../components/data/Backdrop"

class Layout extends Component {
  render() {
    return (
      <section className="Layout">
        <Navbar />
        <section className="Layout__Children">
          <Backdrop />
          <Outlet />
        </section>
      </section>
    );
  }
}


export default Layout
