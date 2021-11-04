import Table from "../components/Table";

const rows = [
  { id: 1, name: "ExpenseGroupName", description: "Description" },
  { id: 2, name: "ExpenseGroupName22222", description: "Description222" },
];
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    width: 350,
    editable: true,
  },
];

const Expense = () => {
  return (
    <h2>
      Expense
      <br />
      <Table valueRows={rows} valueColumns={columns} />
    </h2>
  );
};

export default Expense;
