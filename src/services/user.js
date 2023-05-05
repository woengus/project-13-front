import axios from "axios";
const url = "http://localhost:3001/api/v1/user";
export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        resolve(response.data.body.token);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
