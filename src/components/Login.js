import React from "react";
import { loginSchema } from "../schema";
import FormikWrapper from "./FormikWrapper";
import TextFieldWrapper from "./TextFieldWrapper";
import { useNavigate } from "react-router-dom";
import { users } from "../data";

function Login() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    const user = users.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (user !== undefined) {
      sessionStorage.setItem("user", JSON.stringify(user));
      navigate(`/${user.role}`);
    }
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
          background: "#43c4f2",
          // colorScheme: "#43c4f2",
        },
      }}
    >
      <TextFieldWrapper name="email" type="email" label="Email" />

      <TextFieldWrapper name="password" type="password" label="Password" />
    </FormikWrapper>
  );
}

export default Login;
