import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Sider, Header } from "./sharedComponents";
import { Contacts, Dashboard, Stats, Surveys } from "./routes";

const ContentWrapper = styled.section`
  display: flex;
`;

const ContentRouter = styled.section`
  margin: 20px;
`;

function App() {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <Sider />
        <ContentRouter>
          <Switch>
            <Route path="/" exact component={Surveys} />
            <Route path="/stats/" component={Stats} />
            <Route path="/contacts/" component={Contacts} />
            <Route path="/dashboard/" component={Dashboard} />
          </Switch>
        </ContentRouter>
      </ContentWrapper>
    </div>
  );
}

export default App;
