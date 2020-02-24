import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
} from 'react';
import Card from '../components/Card';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import useFormik from './hooks/useFormik';

const usePrevious = (value) => {
  const ref = useRef()    
  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

const CustomHooks = () => {
  const [counter, setCounter] = useState(0)
  const prevCounter = usePrevious(counter)

  const formik = useFormik({
    initialValues: {
      first: ''
    },
  });

  return (
    <Fragment>     
      <Card style={styles.formTitles}>
        <Button
          variant="contained"
          onClick={() => setCounter(counter + 1)}
        >
          Add
        </Button>
        <p> Counter: {counter} </p>
        <p> Prev Counter: {prevCounter} </p>
      </Card>
      <Card>
        <p>Forms</p>
        <Input
          value={formik.values.first}
          onChange={e => formik.handleChange('first')(e.target.value)}
        />
      </Card>
    </Fragment>
  )
}

const styles = {
  body: {
    textAlign: 'center',
  },
};

export default CustomHooks;
