import Table from "../components/Table";
import { columns, getRows } from "../common/expenseConfig";

const Expense = () => {
  const rows = getRows();
  if (!rows) return <div>Loading...</div>;
  return (
    <h2>
      Expense
      <br />
      <Table rows={rows} columns={columns} />
    </h2>
  );
};

export default Expense;
