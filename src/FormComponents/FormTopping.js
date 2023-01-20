import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function FormTopping(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="mt-8">
      <p>
        <label>{label}</label>
      </p>
      <div className="flex flex-wrap">
        <Field name={name}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <div className="w-1/3">
                  <React.Fragment key={option.key}>
                    <input
                      type="checkbox"
                      id={option.value}
                      {...field}
                      {...rest}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />
                    <label htmlFor={option.value}>{option.value}</label>
                  </React.Fragment>
                </div>
              );
            });
          }}
        </Field>
      </div>
    </div>
  );
}

export default FormTopping;
