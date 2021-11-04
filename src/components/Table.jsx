import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import style from "./Table.module.css";
class DataGridDemo extends React.Component {
  render() {
    return (
      <div style={{ height: 300, width: "90%" }}>
        <DataGrid
          className={style.tableBackground}
          rows={this.props.valueRows}
          columns={this.props.valueColumns}
          pageSize={4}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }
}

export default DataGridDemo;
