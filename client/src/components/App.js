// import React, { Component } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import * as actions from "../actions";

// import Header from "./partials/Header";
// import Footer from "./partials/Footer";
// import Home from "./Home";
// import DailyView from "./workouts/DailyView";
// import WeeklyView from "./workouts/WeeklyView";
// import Settings from "./settings"
// import Workouts from "./settingsouts/workouts";
// import Videos from "./videos/Videos";
// import Calculator from "./sidebarFeats/calculator/Calc";
// import UserHistory from "./sidebarFeats/userHistory/HistoryLogs";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { authActions } from '../redux/modules/auth';
import AppView from './AppView';

// class App extends Component {
//   // componentDidMount() {
//   //   this.props.fetchUser();
//   // }



//   render() {
//     return (
//       <div className="container-no">
//         <BrowserRouter>
//           <div>
//             <Header />
//             <Route exact path="/" component={Home} />
//             {/* <Route exact path="/register" component={Measurements} />  */}
//             <Route exact path="/home" component={Home} />
//             <Route exact path="/workout" component={DailyView} />
//             <Route exact path="/workout-week" component={WeeklyView} />
//             {/* Making this tabs <Route exact path="/workouts" component={Workouts} /> */}
//             {/* <Route exact path="/videos" component={Videos} /> */}
//             {/* Might make these modals <Route exact path="/settings" component={Settings} />
//             <Route exact path="/calc" component={Calculator} />
//             <Route exact path="/history" component={UserHistory} /> */}

//             {/* <Route path="/surveys/new" component={SurveyNew} /> */}
            
//             <Footer />
//           </div>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

const mapDispatchToProps = dispatch => ({
  loginSuccess: profile => dispatch(authActions.loginSuccess(profile)),
  loginError: error => dispatch(authActions.loginError(error)),
  actions
});

export default withRouter(
  connect(
  null,
  mapDispatchToProps,
)(AppView));
