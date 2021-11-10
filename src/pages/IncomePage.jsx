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

  const {
    isLoading: isLoadingGroup,
    isError: isErrorGroup,
    data: dataGroup,
    error: errorGroup,
  } = useQuery(["incomeGroupSelect", URLgroup], () => GetData(URLgroup));

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isLoadingGroup) {
    return <span>Loading...</span>;
  }
  if (isErrorGroup) {
    return <span>Error: {errorGroup.message}</span>;
  }

  const rows = data.incomes;
  const options = dataGroup.incomeGroups;
  return (
    <h2>
      Income
      <br />
      <TransactionDialog URL={URL} options={options} />
      <br />
      <Table rows={rows} columns={columns} />
    </h2>
  );
};

export default Income;
