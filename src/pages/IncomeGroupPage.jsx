import Table from "../components/Table";
import { columns } from "../common/groupConfig";
import { FetchData } from "../services/IncomeGroupService";
import React from "react";
import { useQuery } from "react-query";

const IncomeGroup = () => {
  const URL = "http://localhost:4000/income-groups/";
  const { isLoading, isError, data, error } = useQuery(["todos", URL], () =>
    FetchData(URL)
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
      <Table rows={rows} columns={columns} />
    </h2>
  );
};

export default IncomeGroup;
