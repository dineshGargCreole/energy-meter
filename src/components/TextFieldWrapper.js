import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useField } from "formik";

function TextFieldWrapper(props) {
  const [field, meta] = useField(props.name);
  return (
    <FormControl isInvalid={meta?.error}>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <Input
        id={props?.name}
        name={props?.name}
        type={props?.type || "text"}
        value={field.value}
        {...field}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

export default TextFieldWrapper;
