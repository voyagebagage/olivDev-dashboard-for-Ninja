import { useState } from "react";

export default () => {
  const [form, setForm] = useState({});
  // const [fieldErrors, setFieldErrors] = useState({});
  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  // console.log(form, "form");
  // console.log(fieldErrors, "fieldErrors");
  // if (error) {
  //   for (const item in error) {
  //     setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
  //   }
  // }
  const clientFormValid =
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.email?.length ||
    !form.phone?.length ||
    !form.companyName?.length ||
    !form.country?.length ||
    !form.website?.length;

  return { form, setForm, onChange, clientFormValid };
};
