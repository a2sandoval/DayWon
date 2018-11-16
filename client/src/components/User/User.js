import React, { Component } from "react";
import "../style/User.css";
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
    return (
      <div className="user-components">
        <div className="row">
          <div>
            <img
              src={this.props.user.picture}
              height="40px"
              style={this.border}
              alt="profile"
            />
          </div>
          <div className="s12">Welcome {this.props.user.name}</div>
          <div className="maxes">Your current maxes are</div>
          <div className="userdata">Here are your user stats</div>
          <div className="setting">update settings</div>
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
          <div className="workout-modal">
            <Settings
              settings={this.props.settings}
              measurement={this.props.measurement}
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
