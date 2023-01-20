import Input from "./Input";
import FormSize from "./FormSize";
import FormGluten from "./FormGluten";
import AnythingElse from "./AnythingElse";
import FormTopping from "./FormTopping";

function FormControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <FormSize {...rest} />;
    case "radio":
      return <FormGluten {...rest} />;
    case "checkbox":
      return <FormTopping {...rest} />;
    case "textarea":
      return <AnythingElse {...rest} />;
    default:
      return null;
  }
}

export default FormControl;
