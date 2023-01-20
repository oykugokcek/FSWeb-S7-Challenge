import { Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

function FormSize(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="mt-8">
      <p>
        <label htmlFor={name}>{label}</label>
      </p>

      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </Field>
    </div>
  );
}

export default FormSize;
