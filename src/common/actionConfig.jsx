import * as React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export function IconButtonSizes(props) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={props.handleDelete(props.id)}
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
}

export const GetActions = (handleDelete) => {
  return [
    {
      field: "actions",
      headerName: "Actions",
      width: 140,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <IconButtonSizes handleDelete={handleDelete} id={params.row._id} />
        );
      },
    },
  ];
};
