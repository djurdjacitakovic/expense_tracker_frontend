import Table from "../components/Table";
import { columns } from "../common/incomeConfig";
import React from "react";
import { useQuery } from "react-query";
import { GetData } from "../services/Service";

const Income = () => {
  const URL = "/income/";
  const { isLoading, isError, data, error } = useQuery(["income", URL], () =>
    GetData(URL)
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
