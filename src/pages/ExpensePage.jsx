import Table from "../components/Table";
import { columns, rows } from "../common/ExpenseConfig";

const Expense = () => {
  return (
    <h2>
      Expense
      <br />
      <Table rows={rows} columns={columns} />
    </h2>
  );
};

export default Expense;
