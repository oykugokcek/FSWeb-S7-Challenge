import { Field, ErrorMessage } from "formik";
import React from "react";
import TextError from "./TextError";

const FormGluten = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <p>
        <label>{label}</label>
      </p>

      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  className="my-8 mx-2"
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.value}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
    </div>
  );
};

export default FormGluten;
