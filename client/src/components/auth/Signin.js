// inside auth is where we place all the components that have to do with authenticaion
import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/home");
    });
  };

  handleClick = () => {
    this.setState({
      clicked: true
    });
  };

  handleOutput = () => {
    // we pull handleSubmit which is a prop we get from reduxform. We need this for submitting, it is naturally called.
    const { handleSubmit } = this.props;
    // fieldsets wrap a group of different fields
    if (this.state.clicked === false) {
      return <button onClick={this.handleClick}>Signin</button>;
    } else {
      console.log("clicked");
      return (
        // we then use handleSubmit to call onSubmit which is hte juction we developed for handling sign in. This then references teh onSubmit method above but note: it doesnt call it with ()
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label>Email</label>
            <Field
              name="email"
              type="text"
              component="input"
              // the field automatically wants to see automcomplete to help fill out the form, but for usernmae/password, people wont have an autoComplete so we set it as none
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <div>{this.props.errorMessage}</div>
          <button>Sign In!</button>
        </form>
      );
    }
  };

  render() {
    return <div>{this.handleOutput()}</div>;
  }
}

function mapStateToProps(state) {
  return { state };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signin" }),
  withRouter
)(Signin);
