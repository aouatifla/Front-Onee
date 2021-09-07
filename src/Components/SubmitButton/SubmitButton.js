import React from "react";
import AppButton from "../Button/AppButton";
import { useFormikContext } from "formik";
import colors from "../../../config/colors";

const SubmitButton = ({ title, color }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      fontColor={"#FFF"}
      title={title}
      color={color}
      onPress={handleSubmit}
    />
  );
};

export default SubmitButton;
