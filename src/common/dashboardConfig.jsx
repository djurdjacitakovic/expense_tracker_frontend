export const columns = [
  {
    field: "description",
    headerName: "Description",
    width: 300,
    editable: true,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 200,
    editable: true,
    type: "number",
  },
  {
    field: "expenseGroup",
    headerName: "Expense group",
    width: 200,
    editable: true,
  },
  {
    field: "id",
    headerName: "ID",
    width: 100,
    hidden: true,
  },
];
export const rows = [
  { description: "ddd", amount: 111, expenseGroup: "123", _id: "1" },
  { description: "p", amount: 123, expenseGroup: "1", _id: "12" },
  { description: "djurdja", amount: 100, expenseGroup: "13", _id: "22" },
  { description: "abc", amount: 100, expenseGroup: "13", _id: "24" },
  { description: "def", amount: 200, expenseGroup: "8", _id: "23" },
];