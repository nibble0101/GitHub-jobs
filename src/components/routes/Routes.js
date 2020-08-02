import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "../main/Main";
import JobDetails from "../main/display/JobDetails";
import OtherJobs from "../main/OtherJobs";

export default function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={Main} />
        <Route exact path="/other" component = {OtherJobs} />
        <Route
          exact
          path="/jobs/details"
          component={JobDetails}
        />
      </Switch>
    </React.Fragment>
  );
}
