import Table from "../components/Table";
import { columns } from "../common/groupConfig";
import React from "react";
import { useQuery } from "react-query";
import { GetData } from "../services/Service";
import GroupDialog from "../components/GroupDialog";
const IncomeGroup = () => {
  const URL = "/income-groups/";
  const { isLoading, isError, data, error } = useQuery(
    ["incomeGroup", URL],
    () => GetData(URL)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const rows = data.incomeGroups;
  return (
    <h2>
      Income groups
      <br />
      <GroupDialog URL={URL} />
      <br />
      <Table rows={rows} columns={columns} />
    </h2>
  );
};

export default IncomeGroup;
