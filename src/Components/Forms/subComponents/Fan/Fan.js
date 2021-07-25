import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fanSignUp } from "../../../../Helper/Actions/action";
import style from "./fan.module.css";

function Fan() {
  var initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("* Required"),
    lastName: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("* Required"),
    username: Yup.string()
      .min(5, "Must be at least 5 characters")
      .required("* Required"),
    email: Yup.string()
      .email("Please type a valid email address")
      .required("* Required"),
    password: Yup.string()
      .min(6, "Must be at least 5 characters")
      .required("* Required"),
  });

  const onSubmit = (values) => {
    fanSignUp(values);
  };

  return (
    <Formik
      className={style.form}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={style.formInput}>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" className={style.textField} />
        <ErrorMessage name="firstName">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" className={style.textField} />
        <ErrorMessage name="lastName">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="userName">Username</label>
        <Field name="userName" className={style.textField} />
        <ErrorMessage name="userName">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" className={style.textField} />
        <ErrorMessage name="email">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" className={style.textField} />
        <ErrorMessage name="password">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <div className={style.end}>
          <div>
            I agree to the{" "}
            <label className={style.label}>terms and conditions</label>
          </div>
          <button type="submit" className={style.button}>
            SIGN UP
          </button>
          <div className={style.foot}>
            Already have an account?{" "}
            <label className={style.label}>Log in</label>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default Fan;
