import React from "react";
import Test from "../components/test";
import Adjustment from "../components/pre-test";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      process: "adjust",
      volume: 0.1,
    };
  }

  componentDidMount = async () => {
  };

  handleAdjustClick = (volume) => {
    console.log("The final volume", volume);
    this.setState({ volume, process: "test" });
  }

  renderProcess = () => {
    const { process, volume } = this.state;
    switch (process) {
      case "adjust":
        return <Adjustment handleClick={this.handleAdjustClick} />
      case "test":
        return <Test volume={volume} />;
      default:
        return null;
    }
  };

  render() {
    return this.renderProcess();
  }
}

export default Main;
