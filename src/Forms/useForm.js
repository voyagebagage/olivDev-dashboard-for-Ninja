import { useState } from "react";

export default () => {
  const [form, setForm] = useState({});
  const [form2, setForm2] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState("");
  const [errors2, setErrors2] = useState("");
  // const [fieldErrors, setFieldErrors] = useState({});
  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };
  const onChange2 = (e, { name, value }) => {
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

  //******************CAMPAIGN******************** */
  const campaignFormValid =
    !form.name?.length ||
    !form.type?.length ||
    !form.length?.length ||
    !form.campaignAgentId?.length ||
    !form.campaignClientId?.length ||
    !form.endDate?.length ||
    !form.startDate?.length;

  const campaignFormUpdateValid =
    !form.campaignAgentId?.length || !form.campaignClientId?.length;

  //******************KPI-Dailyreport******************** */
  const addKpiButtonValid =
    !form.coeff?.length || !form.name?.length || !form.target?.length;

  return {
    form,
    setForm,
    onChange,
    clientFormValid,
    addKpiButtonValid,
    campaignFormValid,
    isSubmitting,
    setIsSubmitting,
    errors,
    setErrors,
  };
};
