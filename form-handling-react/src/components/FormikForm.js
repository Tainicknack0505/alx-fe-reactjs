import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    // Simulate API call
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" />
        </div>
        <div>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
