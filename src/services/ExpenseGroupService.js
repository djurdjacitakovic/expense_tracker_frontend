import axios from "axios";
import React from "react";

export const GetExpenseGroups = () => {
  const baseURL = "http://localhost:4000/expense-groups/";

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log(post);
  if (!post) return null;
  const expenseGroups = post.expenseGroups;
  return { expenseGroups };
};
