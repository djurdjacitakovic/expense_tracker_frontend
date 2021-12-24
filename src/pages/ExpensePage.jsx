import Table from "../components/Table";
import { columns } from "../common/expenseConfig";
import { useQuery } from "react-query";
import { GetData } from "../services/Service";
import TransactionDialog from "../components/TransactionDialog";

const Expense = () => {
  const URL = "/expense/";
  const URLgroup = "/expense-groups/";
  const { isLoading, isError, data, error } = useQuery(["expense", URL], () =>
    GetData(URL)
  );

  const {
    isLoading: isLoadingGroup,
    isError: isErrorGroup,
    data: dataGroup,
    error: errorGroup,
  } = useQuery(["expenseGroupSelect", URLgroup], () => GetData(URLgroup));

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isLoadingGroup) {
    return <span>Loading...</span>;
  }
  if (isErrorGroup) {
    return <span>Error: {errorGroup.message}</span>;
  }

  const rows = data.expenses;
  const options = dataGroup.expenseGroups;
  return (
    <h2>
      Expense
      <br />
      <TransactionDialog URL={URL} options={options} />
      <br />
      <Table rows={rows} columns={columns} />
    </h2>
  );
};

export default Expense;
