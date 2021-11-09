import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import style from "../styles/Table.module.css";

function DataGridDemo(props) {
  const { rows, columns } = props;
  //debugger;
  return (
    <div id={style.tableSize}>
      <DataGrid
        className={style.tableBackground}
        columns={columns}
        rows={rows}
        pageSize={4}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row._id}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default DataGridDemo;
