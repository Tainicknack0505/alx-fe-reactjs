// src/components/RegistrationForm.js
// import React, { useState } from 'react';

// const RegistrationForm = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let formErrors = {};

//     if (!username) formErrors.username = 'Username is required';
//     if (!email) formErrors.email = 'Email is required';
//     if (!password) formErrors.password = 'Password is required';

//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       console.log({ username, email, password });
//       setErrors({});
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;

// import React, { useState } from "react";

// const RegistrationForm = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let formErrors = {};

//     if (!username) formErrors.username = "Username is required";
//     if (!email) formErrors.email = "Email is required";
//     if (!password) formErrors.password = "Password is required";

//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       console.log({ username, email, password });
//       setErrors({});
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         {errors.username && (
//           <div style={{ color: "red" }}>{errors.username}</div>
//         )}
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {errors.password && (
//           <div style={{ color: "red" }}>{errors.password}</div>
//         )}
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
