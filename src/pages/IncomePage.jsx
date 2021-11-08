import Table from "../components/Table";
import { columns } from "../common/incomeConfig";
import { FetchData } from "../services/IncomeGroupService";
import React from "react";
import { useQuery } from "react-query";

const Income = () => {
  const URL = "http://localhost:4000/income/";
  const { isLoading, isError, data, error } = useQuery(["todos", URL], () =>
    FetchData(URL)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const rows = data.incomes;
  return (
    <h2>
      Income
      <br />
      <Table rows={rows} columns={columns} />
    </h2>
  );
};

export default Income;
