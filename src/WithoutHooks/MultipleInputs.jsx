import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import Card from "../components/Card";

class MultipleInputs extends Component {
  state = {
    firstInput: "",
    secondInput: "",
    thirdInput: ""
  };

  handleInput(e, input) {
    this.setState({
      [input]: e.target.value
    });
  }

  render() {
    const { firstInput, secondInput, thirdInput } = this.state;
    return (
      <Card>
        <TextField
          label="Number One"
          value={firstInput}
          onChange={e => this.handleInput(e, "firstInput")}
        />
        <TextField
          label="Number Two"
          value={secondInput}
          onChange={e => this.handleInput(e, "secondInput")}
        />
        <TextField
          label="Number Three"
          value={thirdInput}
          onChange={e => this.handleInput(e, "thirdInput")}
        />
      </Card>
    );
  }
}

export default MultipleInputs;
