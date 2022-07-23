import React, { Component } from "react";
import Header from "../components/Header/Header";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Modal/ModalMenu";
import Scrollup from "../components/Scrollup/Scrollup";
import AdminProduct from "../components/Admin/admin_product";

class SignupTheme extends Component {
  render() {
    return (
      <div className="main main-bg">
        <Header />
        <AdminProduct/>
        <ModalSearch />
        <ModalMenu />
        <Scrollup />
      </div>
    );
  }
}

export default SignupTheme;