import React, { Component } from "react";
import { connect } from "react-redux";

import { getProducts, addToCart } from "../../ducks/productReducer";

import './shop.css';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    this.props.getProducts();
  }
  addToCart(id) {
    if (!this.props.user.name) return alert("Please Login");
    this.props.addToCart(id);
  }
  render() {
    return (
      <div  className="shop-container">
        {this.props.products[0] ? (
          this.props.products.map((val, i) => (
            <div key={i} className="product-container">
              <h1 className="product-name">{val.name}</h1>
              <h3 className="product-type">{val.type}</h3>
              <p className="product-price">{val.price}</p>
              <button onClick={() => this.addToCart(val.id)}  className="product-button">
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <div>Sold Out</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.productReducer,
  ...state.userReducer
});

export default connect(mapStateToProps, { getProducts, addToCart })(Shop);
