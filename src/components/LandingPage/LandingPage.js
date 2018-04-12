import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUser } from "../../ducks/userReducer";

import "./landing-page.css";

class LandingPage extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div>
        {this.props.user.name ? (
          <div className="user-container">
            <h2 className="user-name">Hello {this.props.user.name}!</h2>
            <a href={process.env.REACT_APP_LOGOUT}>
              <button className="user-logout">Logout</button>
            </a>
          </div>
        ) : (
          <div className="landing-container">
            <h2 className="alert-text">Opps! You're not logged in!</h2>
            <Link to="/login">
              <button className="login-btn">LOGIN</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.userReducer });

export default connect(mapStateToProps, { getUser })(LandingPage);
