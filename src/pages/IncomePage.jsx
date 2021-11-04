import Table from "../components/Table";

const rows = [
  { id: 1, name: "IGN1", description: "Description" },
  { id: 2, name: "IGN2", description: "12345" },
  { id: 3, name: "IGN3", description: "11112345" },
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

const Income = () => {
  return (
    <h2>
      Income
      <br />
      <Table valueRows={rows} valueColumns={columns} />
    </h2>
  );
};

export default Income;
