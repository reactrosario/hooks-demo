import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Container from "../components/Container";
import State from "./State";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

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
            <Second />
          </Container>
        )}
        {level > 1 && (
          <Container>
            <Third />
          </Container>
        )}
        {level > 2 && (
          <Container>
            <Fourth />
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
