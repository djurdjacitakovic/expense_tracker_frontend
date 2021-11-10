import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { AddData } from "../services/Service";
import { useMutation, useQueryClient } from "react-query";

const validationSchema = yup.object({
  name: yup.string("Enter the name").required("Name is required"),
  description: yup.string("Enter").required("Description is required"),
});

const FormGroup = (props) => {
  const { URL } = props;
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (values) => {
      AddData(URL, values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("expenseGroup");
        queryClient.invalidateQueries("incomeGroup");
      },
    }
  );
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
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

      mutation.mutate(values);
      props.handleClose();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
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
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default FormGroup;
