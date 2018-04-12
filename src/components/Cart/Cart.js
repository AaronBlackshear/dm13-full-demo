import React from "react";
import { connect } from "react-redux";

import { getCart, removeFromCart } from "../../ducks/productReducer";

import './cart.css';

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart();
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.cart[0] ? (
          this.props.cart.map((val, i) => (
            <div className="shop-container">
            <div key={i} className="product-container">
              <h1 className="product-name">{val.name}</h1>
              <h3 className="product-type">{val.type}</h3>
              <p className="product-price">{val.price}</p>
              <button onClick={() => this.props.removeFromCart(val.id)} className="product-button">DELETE</button>
            </div>
            </div>
          ))
        ) : (
          <div>Nothing In Cart</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.productReducer });

export default connect(mapStateToProps, { getCart, removeFromCart })(Cart);
