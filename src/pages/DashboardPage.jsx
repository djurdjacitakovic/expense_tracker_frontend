import Table from "../components/Table";
import { columns, rows } from "../common/dashboardConfig";

const Dashboard = () => {
  return (
    <h2>
      Dashboard
      <br />
      Last five expense changes
      <br />
      <Table rows={rows} columns={columns} />
      <br />
    </h2>
  );
};

export default Dashboard;
