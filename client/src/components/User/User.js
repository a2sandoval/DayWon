import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/modules/actions";
import { Modal } from "@material-ui/core";
import Settings from "../settings/Settings";

class User extends Component {
  state = {
    open: false
  };

  border = {
    borderRadius: "50%"
  };

  settingsRender = open => {
    !open ? this.setState({ open: false }) : this.setState({ open: true });
  };

  componentDidMount() {}
  render() {
    console.log(this.props);
    return (
      <div className="user-components">
        <div className="row">
          <div>
            <img
              src={this.props.user.picture}
              height="60px"
              style={this.border}
              alt="profile"
            />
            Welcome {this.props.user.name}!
          </div>
          <div className="settings-info">
          <div className="s12"></div>
          <div>Current Program {this.props.settings.program}</div>
          <div className="maxes">Your current raw total is: {this.props.measurement.bp + this.props.measurement.sqt + this.props.measurement.dl + this.props.measurement.mp }lbs</div>
          <div className="userdata">Here are your user stats:</div>
          <div>Workouts logged: {this.props.measurement.historicalWorkouts.length - 1}</div>
          <div>Total max improvement: {(this.props.measurement.bp + this.props.measurement.sqt + this.props.measurement.dl + this.props.measurement.mp) - (this.props.measurement.initialBp + this.props.measurement.initialMp + this.props.measurement.initialSqt + this.props.measurement.initialDl)}</div>
          </div>
          <button
            onClick={() => {
              this.settingsRender("open");
            }}
          >
            Settings
          </button>
        </div>
        <Modal
          className="col s6 offset-s3 max-calc"
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={() => this.settingsRender()}
        >
          <div className="settings-modal">
            <Settings
              settings={this.props.settings}
              user={this.props.user}
              measurement={this.props.measurement}
              submitSettings={this.props.submitSettings}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ measurement, user, settings }) {
  return { measurement, user, settings };
}

export default connect(
  mapStateToProps,
  actions
)(User);
