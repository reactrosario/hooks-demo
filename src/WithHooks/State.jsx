import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";

import Card from "../components/Card";

const State = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  return (
    <Fragment>
      <Card style={{ justifyContent: "center" }}>
        <TextField
          label="Controlled Input"
          value={inputValue}
          onChange={handleInput}
        />
      </Card>
    </Fragment>
  );
};

export default State;
