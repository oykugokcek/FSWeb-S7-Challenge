import FormSize from "./FormSize";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";
import Price from "./Price";
import { Route, Link } from "react-router-dom";
import { useState } from "react";

const FormContainer = () => {
  const [formData, setFormData] = useState();

  const initialValues = {
    name: "",
    pizzaSize: "",
    glutenSelection: "",
    topping: [],
    anythingElse: "",
  };

  const pizzaSizeOptions = [
    { key: "Options", value: "Seçiniz" },
    { key: "Option 1", value: "Küçük" },
    { key: "Option 2", value: "Orta" },
    { key: "Option 3", value: "Büyük" },
  ];

  const glutenOptions = [
    { key: "Option 1", value: "Glutenli" },
    { key: "Option 2", value: "Glutensiz" },
  ];

  const toppingOptions = [
    { key: "Option 1", value: "Sosis" },
    { key: "Option 2", value: "Salam" },
    { key: "Option 3", value: "Sucuk" },
    { key: "Option 4", value: "Mantar" },
    { key: "Option 5", value: "Biber" },
    { key: "Option 6", value: "Domates" },
    { key: "Option 7", value: "Brokoli" },
    { key: "Option 8", value: "Soğan" },
    { key: "Option 9", value: "Cheddar" },
    { key: "Option 10", value: "Parmesan" },
    { key: "Option 11", value: "Zeytin" },
    { key: "Option 12", value: "Mısır" },
  ];
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Lütfen isminizi giriniz!")
      .min(2, "Lütfen geçerli bir isim giriniz."),
    pizzaSize: Yup.string().required("Lütfen pizza boyutunu seçiniz!"),
    glutenSelection: Yup.string().required("Lütfen gluten seçimi yapınız."),
    topping: Yup.array()
      .required("Lütfen malzeme seçimi yapınız.")
      .max(10, "Maksimum 10 tane malzeme seçebilirsiniz."),
  });

  let totalPrice;

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    let temporaryFormData = values;
    setFormData(...formData, JSON.stringify(values, null, 2));
    console.log(formData);
  };

  const onChange = (values) => {
    console.log("Form data", values);
    formData = values;
    totalPrice = calculatePrice();
    console.log(totalPrice);
  };

  function calculatePrice() {
    let totalPrice = 0;
    if (formData.pizzaSize === "Küçük") {
      totalPrice = 30;
    } else if (formData.pizzaSize === "Orta") {
      totalPrice = 40;
    } else if (formData.pizzaSize === "Büyük") {
      totalPrice = 50;
    }

    if (formData.glutenSelection === "Glutensiz") {
      totalPrice = (totalPrice * 3) / 2;
    }

    return totalPrice;
  }

  return (
    <>
      <Route exact path="/form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          onChange={onChange}
        >
          {(formik) => (
            <Form className="mx-24 my-8">
              <FormControl
                className="border border-black w-1/4"
                control="input"
                type="name"
                label="İsim: "
                name="name"
              />
              <FormControl
                className="mt-8 m-4"
                control="checkbox"
                label="Malzemeleri seçin."
                name="topping"
                options={toppingOptions}
              />
              <FormControl
                className=" m-8"
                control="select"
                label="Pizza boyutunu seçiniz!"
                name="pizzaSize"
                options={pizzaSizeOptions}
              />

              <FormControl
                className=""
                control="radio"
                label="Gluten seçimi"
                name="glutenSelection"
                options={glutenOptions}
              />
              <FormControl
                className="border border-black w-1/2 my-4"
                control="textarea"
                label="Başka bir isteğiniz varsa belirtin."
                name="anythingElse"
              />

              <ErrorMessage name="name">
                {(error) => <div className="name">{error}</div>}
              </ErrorMessage>
              <ErrorMessage name="topping">
                {(error) => <div className="topping">{error}</div>}
              </ErrorMessage>
              <ErrorMessage name="pizzaSize">
                {(error) => <div className="pizzaSize">{error}</div>}
              </ErrorMessage>
              <ErrorMessage name="glutenSelection">
                {(error) => <div className="glutenSelection">{error}</div>}
              </ErrorMessage>

              <button
                to={`/form/price`}
                className="my-4 mx-8 py-2 px-2
                border
                rounded-full
             "
                type="submit"
                disabled={!formik.isValid}
              >
                Tutarı hesapla!
              </button>
              <Link
                className="my-4 mx-8 py-2 px-2
                border
                rounded-full"
                to="/form/price"
              >
                Devam Edin!
              </Link>
              <div>{totalPrice}</div>
            </Form>
          )}
        </Formik>
      </Route>
      <Route path="/form/price">
        <Price totalPrice={totalPrice} />
      </Route>
    </>
  );
};

export default FormContainer;
