import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from './Card';
import Container from './Container';

const styles = {};

const CardCustom = (props) => {
  const { level } = props;

  return (
    <Fragment>
      <Container>
        <Card>
          First Level - UseState
        </Card>
      </Container>
      {
        level > 0 &&
        <Container>
          <Card>
            Second Level - UseReducer
          </Card>
        </Container>
      }
      {
        level > 1 &&
        <Container>
          <Card>
            Third Level - UseEffect
          </Card>
        </Container>
      }
      {
        level > 2 &&
        <Container>
          <Card>
            Fourth Level - Combined Hooks
          </Card>
        </Container>
      }
      {
        level > 3 &&
        <Container>
          <Card>
            Fifth Level - Custom Hooks
          </Card>
        </Container>
      }      
    </Fragment>
  );
}

CardCustom.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(CardCustom);