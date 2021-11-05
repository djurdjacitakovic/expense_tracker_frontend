import Table from "../components/Table";
import { columns, rows } from "../common/incomeConfig";
const Income = () => {
  return (
    <h2>
      Income
      <br />
      <Table rows={rows} columns={columns} />
    </h2>
  );
};

export default Income;
