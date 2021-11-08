import Table from "../components/Table";
import { columns } from "../common/incomeConfig";
import { GetIncomeGroups } from "../services/IncomeGroupService";
import React from "react";

const Income = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const rows = GetIncomeGroups();
    rows.then((res) => {
      setPost(res);
    });
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <h2>
      Income
      <br />
      <Table rows={post} columns={columns} />
    </h2>
  );
};

export default Income;
