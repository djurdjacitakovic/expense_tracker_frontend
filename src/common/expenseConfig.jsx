import { GetExpenseGroups } from "../services/ExpenseGroupService";
export const getRows = () => {
  const exp = GetExpenseGroups();
  if (!exp) return null;

  const result = exp.expenseGroups;
  return result;
};

export const columns = [
  {
    field: "_id",
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
