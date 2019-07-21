import React from "react";
import TextField from "@material-ui/core/TextField";

export const renderTextField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <TextField
      label="search"
      className={className}
      margin="normal"
      error={touched && Boolean(error)}
      helperText={error}
      {...input}
      {...custom}
    />
  );
};
