<<<<<<< HEAD
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Signout from "../auth/Signout";
=======
// import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
// import DailyView from "../workouts/DailyView";
// import WeeklyView from "../workouts/WeeklyView";
>>>>>>> 617564b086f2768afe7fc3905bc84f9e4653e77e
import { connect } from "react-redux";
import * as actions from "../../redux/modules/actions";
import "../style/Partials.css";
<<<<<<< HEAD
import dayWon_logo from "../../images/dayWon.png";
=======
import { withRouter } from 'react-router-dom';
>>>>>>> 617564b086f2768afe7fc3905bc84f9e4653e77e

import { authActions } from '../../redux/modules/auth';

<<<<<<< HEAD
  handleSignOut = () => {
    console.log("signout clicked");
    this.props.signout();
  };
=======
import HeaderView from './HeaderView';
//Jakes Original Code that now lives in HeaderView
// class Header extends Component {
//   state = {
//     anchorEl: null
//   };
>>>>>>> 617564b086f2768afe7fc3905bc84f9e4653e77e


//   handleClick = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

<<<<<<< HEAD
  render() {
    const { anchorEl } = this.state;
    console.log(this.props);
    console.log("logging auth");

    return (
      <div className="header flex-container">
        <div className="logo">
          <Link to="/home" className="logo">
            <img src={dayWon_logo} alt="dayWon logo" />
          </Link>
        </div>
        <div className="header__icons flex-container">
          <div className="line" />
          <div className="signOut">
            <Signout />
          </div>
          <div className="1h header__icons--color">
            <Link to="/workout">
              <button>Start Workout</button>
            </Link>
          </div>
          <div className="2h header__icons--color">
            <Link to="/home">
              <button>Dashboard</button>
            </Link>
          </div>
          <div className="3h header__icons--color">
            <Link to="workout-week">
              <button>View Workouts</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
=======
//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };
>>>>>>> 617564b086f2768afe7fc3905bc84f9e4653e77e

  

//   render() {
//     const { anchorEl } = this.state;
//     console.log(this.props);
//     console.log("logging auth");
//     if (!localStorage.getItem("token")) {
//       return (
//         <div className="header">
//           <div className="logo">DayWon</div>
//         </div>
//       );
//     } else {
//       return (
//         <div className="header flex-container">
//           <div className="logo">
//             <Link to="/home" className="logo">
//               DayWon
//             </Link>
//           </div>
//           <div className="header__icons flex-container">
//             <div className="line" />
//             <div className="signOut" />
//             <div className="1h header__icons--color">
//               <Link to="/workout">
//                 <button>Start Workout</button>
//               </Link>
//             </div>
//             <div className="2h header__icons--color">
//               <Link to="/home">
//                 <button>Dashboard</button>
//               </Link>
//             </div>
//             <div className="3h header__icons--color">
//               <Link to="workout-week">
//                 <button>View Workouts</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
// }

// Code for redux and auth-0
const mapStateToProps = ({ auth }) => ({
  auth
});

const  mapDispatchToProps = dispatch => ({
  loginRequest: () => dispatch(authActions.loginRequest()),
  logoutSuccess: () => dispatch(authActions.logoutSuccess())
});


// export default connect(
//   mapStateToProps,
//   actions
// )(Header);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderView)
);


