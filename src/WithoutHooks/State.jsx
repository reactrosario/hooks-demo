import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import Card from "../components/Card";

class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <Card>
        <TextField
          label="Controlled Input"
          value={inputValue}
          onChange={this.handleInput}
        />
      </Card>
    );
  }
}

export default State;
