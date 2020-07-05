import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectInput({
  locale,
  name,
  value,
  onChange,
  ...rest
}) {
  const classes = useStyles();
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

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
        <>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              labelId="demo-simple-select-outlined-label"
              value={value}
              onChange={onChange}
              placeholder={locale.name}
              {...rest}
            >
              {locale.values.map((locale) => (
                <MenuItem key={locale.value} value={locale.value}>
                  {locale.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      ) : (
        <>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              labelId="demo-simple-select-outlined-label"
              value={value}
              onChange={onChange}
              placeholder={locale.name}
              {...rest}
            >
              {locale.values.map((locale) => (
                <MenuItem key={locale.value} value={locale.value}>
                  {locale.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}
    </>
  );
}
