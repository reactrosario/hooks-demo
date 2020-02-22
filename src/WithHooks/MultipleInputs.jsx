import React, { Fragment, useReducer } from "react";
import TextField from "@material-ui/core/TextField";
import Card from "../components/Card";
import { Grid } from "@material-ui/core";
import Container from "../components/Container";

const MultipleInputs = () => {
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstInput: "",
      secondInput: "",
      thirdInput: ""
    }
  );

  const handleInput = (e, input) => {
    setInputValues({ [input]: e.target.value });
  };

  return (
    <>
      <Card>
        <TextField
          label="Number One"
          value={inputValues.firstInput}
          onChange={e => handleInput(e, "firstInput")}
        />
        <TextField
          label="Number Two"
          value={inputValues.secondInput}
          onChange={e => handleInput(e, "secondInput")}
        />
        <TextField
          label="Number Three"
          value={inputValues.thirdInput}
          onChange={e => handleInput(e, "thirdInput")}
        />
      </Card>
    </>
  );
};

export default MultipleInputs;
