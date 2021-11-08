import Table from "../components/Table";
import { columns } from "../common/groupConfig";
import { useQuery } from "react-query";
import { GetData } from "../services/ExpenseGroupService";

const ExpenseGroup = () => {
  const URL = "http://localhost:4000/expense-groups/";
  const { isLoading, isError, data, error } = useQuery(["todos", URL], () =>
    GetData(URL)
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
      Expense groups
      <br />
      <Table rows={rows} columns={columns} />
    </h2>
  );
};

export default ExpenseGroup;
