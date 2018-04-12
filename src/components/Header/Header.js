import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.css";

const Header = props => (
  <div className="header">
    <div className="container">
      <Link to="/" className="link">
        <div>Home</div>
      </Link>
      <Link to="/login" className="link">
        <div>Login</div>
      </Link>
      <Link to="/shop" className="link">
        <div>Shop</div>
      </Link>
      <Link to="/cart" className="link">
        <div>Cart {props.cart.length || 0}</div>
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({ ...state.productReducer });

export default connect(mapStateToProps)(Header);
