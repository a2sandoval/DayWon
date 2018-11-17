import React, { Component } from "react";
import { string } from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

class Settings extends Component {
  state = {
    weight: this.props.settings.weight,
    program: this.props.settings.program,
    timePerSet: this.props.settings.timePerSet,
    weightIncrement: this.props.settings.weightIncrement,
    weightVal: "lb",
    programVal: "juggernaut",
    timeVal: "180",
    incrementVal: "2.5"
  };

  handleChange = (event, type) => {
    console.log(event.target.value);
    console.log(type);
    var key = type + "Val";
    this.setState({ [key]: event.target.value });
  };

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
      // return (
      //   <div className="existing-user">Thinking of making some changes?</div>
      // );
    }
  };

  handleChange = () => {
    var newSettingsObj = {
      weightType: this.state.weightVal,
      program: this.state.programVal,
      timePerSet: this.state.timeVal,
      weightIncrement: this.state.incrementVal,
      userId: this.props.user.userId
    };
    this.props.submitSettings(newSettingsObj);
  };

  render() {
    console.log(this.props);
    return (
      <div className="update-settings">
        {this.isNewUser()}
        <h3 className="update__header">Update Settings</h3>
        <FormControl component="fieldset">
          <FormLabel component="legend">Weight</FormLabel>
          <div className="form-settings">
            <RadioGroup
              aria-label="Weight"
              name="q1"
              value={this.state.weightVal}
              onChange={event => this.handleChange(event, "weight")}
            >
              <FormControlLabel value="kg" control={<Radio />} label="KG" />
              <FormControlLabel value="lb" control={<Radio />} label="LB" />
            </RadioGroup>
          </div>
        </FormControl>
        <div className="q2">
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Do you know what workout program you want?
            </FormLabel>
            <RadioGroup
              aria-label="program"
              name="q2"
              value={this.state.programVal}
              onChange={event => this.handleChange(event, "program")}
            >
              <FormControlLabel
                value="juggernaut"
                control={<Radio />}
                label="Juggernaut"
              />
              <FormControlLabel
                value="inverted juggernaut"
                control={<Radio />}
                label="Inverted Juggernaut"
              />
              <FormControlLabel
                value="5/3/1"
                control={<Radio />}
                label="5/3/1"
              />
              <FormControlLabel
                value="cowboy method"
                control={<Radio />}
                label="Cowboy Method"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="q3">
          <FormControl component="fieldset">
            <FormLabel component="legend">
              How much time are you looking for between sets?
            </FormLabel>
            <RadioGroup
              aria-label="time"
              name="q3"
              value={this.state.timeVal}
              onChange={event => this.handleChange(event, "time")}
            >
              <FormControlLabel value="60" control={<Radio />} label="60" />
              <FormControlLabel value="90" control={<Radio />} label="90" />
              <FormControlLabel value="120" control={<Radio />} label="120" />
              <FormControlLabel value="180" control={<Radio />} label="180" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="q4">
          <FormControl component="fieldset">
            <FormLabel component="legend">
              What weight increments do you have available to you?
            </FormLabel>
            <RadioGroup
              aria-label="increment"
              name="q3"
              value={this.state.incrementVal}
              onChange={event => this.handleChange(event, "increment")}
            >
              <FormControlLabel value="1.25" control={<Radio />} label="1.25" />
              <FormControlLabel value="2.5" control={<Radio />} label="2.5" />
              <FormControlLabel value="5" control={<Radio />} label="5" />
            </RadioGroup>
          </FormControl>
          <button className="submitSettings" onClick={this.handleChange}>
            Submit Changes
          </button>
        </div>
      </div>
    );
  }
}

export default Settings;
