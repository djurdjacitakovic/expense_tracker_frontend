import Table from "../components/Table";
import { columns } from "../common/expenseConfig";
import { useQuery } from "react-query";
import { GetExpenseGroups } from "../services/ExpenseGroupService";

const Expense = () => {
  const URL = "http://localhost:4000/expense-groups/";
  const { isLoading, isError, data, error } = useQuery(["todos", URL], () =>
    GetExpenseGroups(URL)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const rows = data.expenseGroups;
  return (
    <h2>
      Expense
      <br />
      <Table rows={rows} columns={columns} />
    </h2>
  );
};

export default Expense;
