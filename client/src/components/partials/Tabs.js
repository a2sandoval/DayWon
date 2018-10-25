import React from "react";
import PropTypes from "prop-types";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { AppBar, Tabs, Tab, Typography, Paper, Grid } from "@material-ui/core";
import Dashboard from "../dashboard/Dashboard";
import DailyView from "../workouts/DailyView";
import WeeklyView from "../workouts/WeeklyView";
import ColorTheme from "../../utils/materialui";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

export default class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    return (
      <MuiThemeProvider theme={ColorTheme}>
        <Tabs
          className="tab_bar"
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="Dashboard" />
          <Tab label="Weekly" />
          <Tab label="Daily" />
        </Tabs>
        <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer>
            <Grid item xs={12}>
              <Dashboard />
            </Grid>
          </TabContainer>
          <TabContainer>
            <Grid item xs={12}>
              <WeeklyView />
            </Grid>
          </TabContainer>
          <TabContainer>
            <Grid item xs={12}>
              <DailyView />
            </Grid>
          </TabContainer>
        </SwipeableViews>
      </MuiThemeProvider>
    );
  }
}
