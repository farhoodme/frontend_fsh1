import api from "./API";

export const getTwitterPosts = (params) => {
  return api.get("/manystreams/twitter", { params }).then(({ data }) => data);
};