import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom'
import userImg from '../img/user.png';
import backgroundImg from '../img/background.jpeg';

const BasicForm = () => {
  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState({
    data: {
      name: 'rohit',
      emailId: 'rroo@gmail.com',
      password: '1234567890',
      phoneNo: '9876543210',
    },
  });

  console.log(userData)
  console.log(auth)

  return (
    <div>
        <h1 className="title">Form Validation</h1>
      <Formik
        initialValues={{ name: '', emailId: '', password: '', phoneNo: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.emailId) {
            errors.emailId = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailId)
          ) {
            errors.emailId = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);

          if (userData.data.emailId === values.emailId && userData.data.password === values.password) {
            setAuth(prevAuth => !prevAuth)
            console.log("hello")
          } else {
            alert(JSON.stringify('Invalid User!'))
          }
        }}
      >
        {({ isSubmitting }) => (
          <div className="container">
            <img className="background" src={backgroundImg} alt="backgroun" />
            <Form className="form">
              <img className="userImg" src={userImg} alt="user" />
              <div className="inputs">
                <Field
                  type="name"
                  name="name"
                  placeholder="YOUR NAME"
                  className="input"
                />
                <ErrorMessage name="name" component="div" />

                <Field
                  type="text"
                  name="emailId"
                  placeholder="EMAIL"
                  className="input"
                />
                <ErrorMessage name="emailId" component="div" />

                <Field
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  className="input"
                />
                <ErrorMessage name="password" component="div" />

                <Field
                  type="text"
                  name="phoneNo"
                  placeholder="PHONE"
                  className="input"
                />
                <ErrorMessage name="phoneNo" component="div" />
              </div>
              <div className="buttons" style={{ display: auth ? 'none' : 'block'}}>
                <button
                  className="btn btn-reset"
                  type="reset"
                  disabled={isSubmitting}
                >
                  Reset
                </button>
                <button
                  className="btn btn-register"
                  type="submit"
                  disabled={isSubmitting}
                >
                  register
                </button>
              </div>
              <Link to="/home" className="verified" style={{ display: auth ? 'block' : 'none', textDecoration: 'none' }}>
                You are valid user
              </Link>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default BasicForm;