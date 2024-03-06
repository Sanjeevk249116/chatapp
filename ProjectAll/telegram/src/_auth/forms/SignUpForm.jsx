import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./signUpForm.css";
import { useState } from "react";
import { CircularProgress } from "@chakra-ui/react";

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),

  conform_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

function SignUpForm() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="signup-container">
      <div className="flex flex-center flex-col">
        <img src="../../../public/assets/images/logo.svg" alt="signLogo" />
        <h2 className="h3-bold md:h2-bold justify-center pt-5 pb-2">
          Create a new Account
        </h2>
      </div>
      <Formik
        initialValues={{
          Name: "",

          email: "",
          password: "",
          conform_password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          setLoading(true)
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="signup-form">
            <div className="form-group">
              <label>Name:</label>
              <Field
                name="Name"
                placeholder="First Name"
                className="form-control"
              />
              {errors.Name && touched.Name ? (
                <div className="error">{errors.Name}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label>Email:</label>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="form-control"
              />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <Field
                name="password"
                type="password"
                placeholder="password"
                className="form-control"
              />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>Conform Password:</label>
              <Field
                name="conform_password"
                type="password"
                placeholder="conform_password"
                className="form-control"
              />
              {errors.conform_password && touched.conform_password ? (
                <div className="error">{errors.conform_password}</div>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? (
                <CircularProgress isIndeterminate size="35px" color="red.500" />
              ) : (
                <> Submit</>
              )}
            </button>
          </Form>
        )}
      </Formik>
      <div className="mt-1">
        <p>Already Acoount </p>
      </div>
    </div>
  );
}

export default SignUpForm;
