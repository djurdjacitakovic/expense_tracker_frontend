/*export const rows = [
  { _id: 1, name: "IGN1", description: "Description" },
  { _id: 2, name: "IGN2", description: "12345" },
  { _id: 3, name: "IGN3", description: "11112345" },
];*/

/*import { GetIncomeGroups } from "../services/IncomeGroupService";
export const getRows = () => {
  const exp = GetIncomeGroups();
  if (!exp) return null;

  const result = exp.incomeGroups;
  return result;
};*/
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
