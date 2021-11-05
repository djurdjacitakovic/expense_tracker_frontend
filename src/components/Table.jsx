import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import style from "../styles/Table.module.css";

function DataGridDemo(props) {
  return (
    <div id={style.tableSize}>
      <DataGrid
        className={style.tableBackground}
        rows={props.rows}
        columns={props.columns}
        pageSize={4}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default DataGridDemo;
