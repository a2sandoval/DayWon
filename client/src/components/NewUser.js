import React, { Component } from "react";
import "./style/Welcome.css";
import * as actions from "../actions";

class NewUser extends Component {
  state = {
    current: "signup"
  };
  // can have change setting very similar to this
  render() {
    return (
      <div>
        <h1>Let's Get Started!</h1>
        <p>
          Welcome to DayWon Training! It's the perfect place for anyone building
          strength, size, or lean muscle. Before we continue please answer the
          following:
        </p>
        <div className="questions">
          <div className="q1">
            How many days a week can you workout?
            <form>
              <p class="range-field">
                <input type="range" id="days-workingout" min="1" max="7" />
              </p>
            </form>
          </div>
          <div className="q2">
            What are you looking for in a program?
            <form>
              <p>
                <label>
                  <input name="group1" type="radio" checked />
                  <span>To get bigger and stronger</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" />
                  <span>To compete</span>
                </label>
              </p>
              <p>
                <label>
                  <input class="with-gap" name="group1" type="radio" />
                  <span>To get past my workout plateu</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="group1" type="radio" disabled="disabled" />
                  <span>Something different</span>
                </label>
              </p>
            </form>
          </div>
          <div className="q3 switch">
            Workout in pounds:
            <label>
              No
              <input type="checkbox" />
              <span class="lever" />
              Yes
            </label>
          </div>
          <div className="q4">
            Do you know what workout program you want?
            <div class="input-field col s12">
              <select>
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="1">Juggernaunt</option>
                <option value="2">Inverted Juggernaut</option>
                <option value="3">5/3/1</option>
                <option value="3">GZCL</option>
              </select>
              <label>Programs</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth, user }) {
  return { auth, user };
}

export default connect(
  mapStateToProps,
  actions
)(NewUser);
