import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import TransactionForm from "./TransactionForm";
import DialogTitle from "@mui/material/DialogTitle";
import { useQuery } from "react-query";
import { GetData } from "../services/Service";

export default function FormDialog(props) {
  const { URL, URLgroup } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { isLoading, isError, data, error } = useQuery(
    ["formSelect", URLgroup],
    () => GetData(URLgroup)
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.error}</span>;
  }
  const optionsGroups = data.expenseGroups;

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add transaction
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Transaction</DialogTitle>
        <TransactionForm URL={URL} optionsGroups={optionsGroups} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
