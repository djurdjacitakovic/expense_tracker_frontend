import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { AddData } from "../services/Service";
import { useMutation } from "react-query";
import Select from "./Select";

const validationSchema = yup.object({
  description: yup.string("Enter").required("Description is required"),
  amount: yup
    .number("Enter")
    .min(0, "Min value 0.")
    .required("Amount is required"),
  idGroup: yup.string("Enter").required("Group is required"),
});

const FormGroup = (props) => {
  const { URL, optionsGroups } = props;

  const mutation = useMutation((values) => {
    return AddData(URL, values);
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      amount: "",
      idGroup: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (mutation.isLoading) {
        console.log("loading");
        return <span>Loading...</span>;
      }
      if (mutation.isError) {
        console.log("error");
        return <span>Error: {mutation.error}</span>;
      }

      const data = {
        description: values.description,
        amount: values.amount,
        expenseGroup: values.idGroup,
        incomeGroup: values.idGroup,
      };

      mutation.mutate(data);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
        <div>{formik.errors.amount}</div>
        <TextField
          fullWidth
          id="amount"
          name="amount"
          label="Amount"
          type="number"
          value={formik.values.amount}
          onChange={formik.handleChange}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amont}
        />
        <br />
        <Select optionsGroups={optionsGroups} />
        <br />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default FormGroup;
