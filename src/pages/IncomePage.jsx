import Table from "../components/Table";
import { columns } from "../common/incomeConfig";
import React from "react";
import { useQuery } from "react-query";
import { GetData } from "../services/Service";
import TransactionDialog from "../components/TransactionDialog";

const Income = () => {
  const URL = "/income/";
  const URLgroup = "/income-groups/";
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
      <TransactionDialog URL={URL} URLgroup={URLgroup} />
      <br />
      <Table rows={rows} columns={columns} />
    </h2>
  );
};

export default Income;
