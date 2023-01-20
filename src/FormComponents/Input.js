import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="flex flex-col mt-5 ml-5">
      <label className="mr-2 mb-2" htmlFor={name}>
        {label}
      </label>
      <Field id={name} name={name} {...rest} />
    </div>
  );
}

export default Input;
