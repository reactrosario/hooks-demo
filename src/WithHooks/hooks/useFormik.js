import React from 'react';

const useFormik = ({
  initialValues,
  onSubmit
}) => {
  const [values, setValues] = React.useState(initialValues || {});

  const handleChange = name => text => {
    setValues(prevValues => ({ ...prevValues, [name]: text }));
  };

  const handleSubmit = async () => {
    return onSubmit(values);
  };

  return { values, setValues, handleChange, handleSubmit };
}

export default useFormik;