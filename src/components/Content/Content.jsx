import React from "react";
import { Route, Switch } from "react-router-dom";
import Contacts from "./subpages/Contacts";
import Dashboard from "./subpages/Dashboard";
import Stats from "./subpages/Stats";
import Surveys from "./subpages/Surveys";
import { ContentStyle } from "./content.style";

const Content = () => {
  return (
    <ContentStyle>
      <Switch>
        <Route path="/" exact component={Surveys} />
        <Route path="/stats/" component={Stats} />
        <Route path="/contacts/" component={Contacts} />
        <Route path="/dashboard/" component={Dashboard} />
      </Switch>
    </ContentStyle>
  );
};

export default Content;
