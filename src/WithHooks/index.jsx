import React, { Fragment } from "react";
import Container from "../components/Container";
import State from "./State";
import MultipleInputs from "./MultipleInputs";
import RequestDemo from "./RequestDemo";
import FormDemo from "./FormDemo";

const WithHooks = ({ level }) => {
  return (
    <Fragment>
      <Container>
        <State />
      </Container>
      {level > 0 && (
        <Container>
          <MultipleInputs />
        </Container>
      )}
      {level > 1 && (
        <Container>
          <RequestDemo />
        </Container>
      )}
      {level > 2 && (
        <Container>
          <FormDemo />
        </Container>
      )}
    </Fragment>
  );
};

export default WithHooks;
