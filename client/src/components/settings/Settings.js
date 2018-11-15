import React, { Component } from "react";
import { string } from "prop-types";

class Settings extends Component {
  state = {
    weight: "lb",
    program: "Juggernaut",
    timePerSet: 180,
    weightIncrement: 2.5
  };

  componentDidMount() {
    this.setState({
      weight: this.props.settings.weight,
      program: this.props.settings.program,
      timePerSet: this.props.settings.timePerSet,
      weightIncrement: this.props.settings.weightIncrement
    });
  }

  isNewUser = () => {
    console.log(this.props.measurement);
    if (!this.props.measurement.historicalMaxes) {
      console.log("New User!");
      return (
        <React.Fragment>
          <div className="new-user">Welcome to DayWon</div>
          <div className="new-user">Let's Get Started!</div>
          <p>
            Welcome to DayWon Training! It's the perfect place for anyone
            building strength, size, or lean muscle. Before we continue please
            answer the following:
          </p>
        </React.Fragment>
      );
    } else {
      return (
        <div className="existing-user">Thinking of making some changes?</div>
      );
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="update-settings">
        {this.isNewUser()}
        <h3 className="update__header">Update Settings</h3>
        <div className="q1 switch">
          Workout in pounds:
          <label>
            No
            <input type="checkbox" />
            <span class="lever" />
            Yes
          </label>
        </div>
        <div className="q2">
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
        <div className="q3">
          How much time would you like between sets?
          <form>
            <p class="range-field">
              <input type="range" id="days-workingout" min="60" max="240" />
            </p>
          </form>
        </div>
        <div className="q4">
          What weight increments do you have available to you?
          <form>
            <p>
              <label>
                <input name="group1" type="radio" checked />
                <span>1.25</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" />
                <span>2.5</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" />
                <span>5</span>
              </label>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
