import Table from "../components/Table";
import { columns } from "../common/incomeConfig";
import { GetIncomeGroups } from "../services/IncomeGroupService";
import React from "react";
import { useQuery } from "react-query";

const Income = () => {
  const URL = "http://localhost:4000/income-groups/";
  const { isLoading, isError, data, error } = useQuery(["todos", URL], () =>
    GetIncomeGroups(URL)
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
      Income
      <br />
      <Table rows={rows} columns={columns} />
    </h2>
  );
};

export default Income;
