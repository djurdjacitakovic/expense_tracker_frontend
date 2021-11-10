import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { AddData } from "../services/Service";
import { useMutation, useQueryClient } from "react-query";
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
  const { URL, options } = props;
  // let option = "";
  const [option, setOption] = React.useState("");

  const handleChangeSelect = (selected) => {
    setOption(selected);
  };
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (values) => {
      AddData(URL, values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("expense");
        queryClient.invalidateQueries("income");
      },
    }
  );

  const formik = useFormik({
    initialValues: {
      description: "",
      amount: "",
      idGroup: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (mutation.isLoading) {
        return <span>Loading...</span>;
      }
      if (mutation.isError) {
        return <span>Error: {mutation.error}</span>;
      }

      const data = {
        description: values.description,
        amount: values.amount,
        expenseGroup: values.idGroup,
        incomeGroup: values.idGroup,
      };

      mutation.mutate(data);
      props.handleClose();
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
        <Select
          options={options}
          selected={handleChangeSelect}
          fullWidth
          id="idGroup"
          name="idGroup"
          label="idGroup"
          value={(formik.values.idGroup = option)}
          onChange={formik.handleChange}
          error={formik.touched.idGroup && Boolean(formik.errors.idGroup)}
          helperText={formik.touched.idGroup && formik.errors.idGroup}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default FormGroup;
