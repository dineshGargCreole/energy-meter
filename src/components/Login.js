import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  VStack,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { loginSchema } from "../schema";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("form values", values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, errors, values, handleChange }) => (
          <Box
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={800}
            p={6}
            m="10px auto"
            as="form"
            onSubmit={handleSubmit}
          >
            <VStack spacing={8}>
              <FormControl isInvalid={errors?.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={values?.email}
                />
                <FormErrorMessage>{errors?.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors?.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                />
                <FormErrorMessage>{errors?.password}</FormErrorMessage>
              </FormControl>

              <Button type="submit" width="full" colorScheme="purple">
                Login
              </Button>
            </VStack>
          </Box>
        )}
      </Formik>
    </div>
  );
}

export default Login;
