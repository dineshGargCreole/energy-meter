import React from "react";
import { Formik } from "formik";
import { Box, VStack, Button } from "@chakra-ui/react";

function FormikWrapper({ children, ...props }) {
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      onSubmit={props.onSubmit}
    >
      {({ handleSubmit }) => (
        <Box
          as="form"
          borderWidth={props?.formStyles?.borderWidth}
          rounded={props?.formStyles?.rounded}
          shadow={props?.formStyles?.shadow}
          maxWidth={props?.formStyles?.maxWidth}
          p={props?.formStyles?.p}
          m={props?.formStyles?.m}
          onSubmit={handleSubmit}
        >
          <VStack>
            {Array.isArray(children)
              ? children?.map((child) => child)
              : children}

            <Button
              type="submit"
              width={props?.submitButton?.styles?.width}
              colorScheme={props?.submitButton?.styles?.colorScheme}
              background={props?.submitButton?.styles?.background}
            >
              {props?.submitButton?.label}
            </Button>
          </VStack>
        </Box>
      )}
    </Formik>
  );
}

export default FormikWrapper;
