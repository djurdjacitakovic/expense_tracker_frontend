import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import GroupForm from "./GroupForm";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog(props) {
  const { URL } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add group
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Group</DialogTitle>
        <GroupForm URL={URL} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
