import React from "react";
import Test from "../components/test";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      process: "test",
    };
  }

  componentDidMount = async () => {
  };

  renderProcess = () => {
    const { process } = this.state;
    switch (process) {
      case "test":
        return <Test />;
      default:
        return null;
    }
  };

  render() {
    return this.renderProcess();
  }
}

export default Main;
