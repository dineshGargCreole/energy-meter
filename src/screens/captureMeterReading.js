import React from "react";
import Layout from "../components/Layout";
import FormikWrapper from "../components/FormikWrapper";
import TextFieldWrapper from "../components/TextFieldWrapper";

function CaptureMeterReading() {
  return (
    <Layout>
      Capture Meter Reading
      <FormikWrapper>
        <TextFieldWrapper name="serialNumber" label="Serial Number" />
        <TextFieldWrapper
          name="currentMeterReading"
          label="Current Meter Reading"
        />
      </FormikWrapper>
    </Layout>
  );
}

export default CaptureMeterReading;
