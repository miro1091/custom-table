import React from "react";
import Content from "./components/Content";
import Sider from "./components/Sider";
import Header from "./components/Header";
import { ContentWrapper } from "./app.style";

function App() {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <Sider />
        <Content />
      </ContentWrapper>
    </div>
  );
}

export default App;
