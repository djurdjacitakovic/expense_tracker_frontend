import Table from "../components/Table";
import { columns } from "../common/dashboardConfig";
import { GetExpenseGroups } from "../services/ExpenseGroupService";
import { useQuery } from "react-query";

const Dashboard = () => {
  const URL = "http://localhost:4000/expense/last-five";
  const { isLoading, isError, data, error } = useQuery(["todos", URL], () =>
    GetExpenseGroups(URL)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <h2>
      Dashboard
      <br />
      Last five expense changes
      <br />
      <Table rows={data} columns={columns} />
      <br />
    </h2>
  );
};

export default Dashboard;
