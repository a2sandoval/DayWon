import React, { Component } from "react";

export default class Timer extends Component {
  state = {
    seconds: "00",
    minutes: "0",
    play: true,
    secondsRemaining: 180,
    negative: false,
    secondsLate: 0,
    start: false
  };

  tickInterval = () => {
    if (this.state.play === false) {
      return;
    }
    this.state.negative === false
      ? this.operateTick("Remaining")
      : this.operateTick("Late");
  };

  operateTick = type => {
    let typeCount = "seconds" + type;
    let min = Math.floor(this.state[typeCount] / 60);
    let sec = this.state[typeCount] - min * 60;
    if (min === 0 && sec === 0 && this.state.negative === false) {
      return this.inTheNegatives();
    }
    sec = sec.toString().length === 1 ? "0" + sec : sec;
    let time;
    type === "Remaining"
      ? (time = this.state[typeCount] - 1)
      : (time = this.state[typeCount] + 1);
    this.setState({
      minutes: min,
      seconds: sec,
      [typeCount]: time
    });
  };

  inTheNegatives = () => {
    this.setState({ negative: true });
  };

  reset = () => {
    this.setState({ secondsRemaining: 180 });
  };

  pause = () => {
    this.state.play === true
      ? this.setState({ play: false })
      : this.setState({ play: true });
  };

  playOrPause = () => {
    if (this.state.play === true) {
      return "Pause";
    } else {
      return "Play";
    }
  };

  changeTime = type => {
    let left = this.state.secondsRemaining;
    type === "plus"
      ? this.setState({
          secondsRemaining: left + 15
        })
      : this.setState({
          secondsRemaining: left - 15
        });
  };

  isNegative = () => {
    if (this.state.negative === true) {
      return "negative-value";
    }
  };

  componentDidMount() {
    setInterval(this.tickInterval, 1000);
  }

  render() {
    if (this.props.update === true) {
      this.setState({ secondsRemaining: 180 }, () => {
        this.props.updated();
      });
    }
    return (
      <div className="timer-container">
        <div className="timer-clock" id={this.isNegative()}>
          {[this.state.minutes] + ":" + [this.state.seconds]}
        </div>
        <div className="timer-buttons">
          <button id="play-pause" onClick={this.pause}>
            {this.playOrPause()}
          </button>
          <button id="reset" onClick={this.reset}>
            Reset
          </button>
          <button id="add-15" onClick={() => this.changeTime("plus")}>
            + 15 Seconds
          </button>
          <button id="minus-15" onClick={() => this.changeTime("minus")}>
            - 15 Seconds
          </button>
        </div>
      </div>
    );
  }
}
