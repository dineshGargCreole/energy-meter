import React from "react";
import { loginSchema } from "../schema";
import FormikWrapper from "./FormikWrapper";
import TextFieldWrapper from "./TextFieldWrapper";
import { users } from "../data";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    const user = users.filter(
      (user) => user.email === values.email && user.password === values.password
    );
    console.log("usserr", user);
  };

  return (
    <FormikWrapper
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
      formStyles={{
        borderWidth: "1px",
        rounded: "lg",
        shadow: "1px 1px 3px rgba(0,0,0,0.3)",
        maxWidth: 800,
        p: 6,
        m: "10px auto",
      }}
      submitButton={{
        label: "Login",
        styles: {
          width: "full",
          colorScheme: "purple",
        },
      }}
    >
      <TextFieldWrapper name="email" type="email" label="Email" />

      <TextFieldWrapper name="password" type="password" label="Password" />
    </FormikWrapper>
  );
}

export default Login;
