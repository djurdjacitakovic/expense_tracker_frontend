import axios from "axios";
import React from "react";

const GetExpenseGroups = () => {
  const baseURL = "http://localhost:4000/expense-groups/";

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return post.expenseGroups;
};

export default GetExpenseGroups;
