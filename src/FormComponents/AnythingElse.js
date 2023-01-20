import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function AnythingElse(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <p>
        <label htmlFor={name}>{label}</label>
      </p>

      <Field as="textarea" id={name} name={name} {...rest} />
    </div>
  );
}

export default AnythingElse;
