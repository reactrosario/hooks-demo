import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Container from "../components/Container";
import State from "./State";
import MultipleInputs from "./MultipleInputs";
import RequestDemo from "./RequestDemo";
import FormDemo from "./FormDemo";

class WithoutHooks extends Component {
  render() {
    const { level } = this.props;
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
  }
}

WithoutHooks.propTypes = {
  level: PropTypes.number.isRequired
};

export default WithoutHooks;
