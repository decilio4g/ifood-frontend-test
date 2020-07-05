import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import TextField from "@material-ui/core/TextField";

export default function Input({ name, value, Icon, onChange, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      {error ? (
        <TextField
          error
          className="input"
          variant="outlined"
          inputRef={inputRef}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          {...rest}
        />
      ) : (
        <>
          <TextField
            className="input"
            variant="outlined"
            inputRef={inputRef}
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}
            {...rest}
          />
        </>
      )}
    </>
  );
}
