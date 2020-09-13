import React from "react";
import Main from "./pages/main";
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
      </BrowserRouter>
    );
  }
}
export default App;
