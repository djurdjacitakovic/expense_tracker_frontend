import { IconButtonSizes } from "../common/actionConfig";

export const columnsExpense = [
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
    field: "_id",
    headerName: "ID",
    width: 100,
  },
];
export const columnsIncome = [
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
    field: "incomeGroup",
    headerName: "Income group",
    width: 200,
    editable: true,
  },
  {
    field: "_id",
    headerName: "ID",
    width: 100,
    hidden: true,
  },
];
