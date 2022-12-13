import React from "react";
import { Button } from "@chakra-ui/react";

function FieldEngineer() {
  const findMeterByCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("pos", position);
    });
  };

  return (
    <div>
      <Button
        background={"#2477bf"}
        color={"#fff"}
        float={"right"}
        _hover={"none"}
        onClick={findMeterByCurrentLocation}
      >
        Find Energy Meter By Current Location
      </Button>
    </div>
  );
}

export default FieldEngineer;
