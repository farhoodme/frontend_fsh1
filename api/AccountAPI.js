import api from "./API";

export const login = ({ email, password }) => {
  const body = { email, password };
  return api({
    method: "POST",
    url: "/users/login",
    headers: { "Content-Type": "application/json" },
    data: body,
  }).then(({ data }) => data);
};
