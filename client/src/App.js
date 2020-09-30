import React from "react";
import Main from "./pages/main";
import Test from "./pages/test";
import { Route, BrowserRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/test" component={Test} />
      </BrowserRouter>
    );
  }
}
export default App;
