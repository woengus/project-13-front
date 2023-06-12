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

export const getProfile = (token) => {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
  return axios
    .post(`${url}/profile`)
    .then((res) => {
      //console.log(res.data);
      return res.data.body;
    })
    .catch((error) => {
      return error;
    });
};

export const updateProfile = (token, data) => {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
  return axios
    .put(`${url}/profile`, data)
    .then((res) => {
      return res.data.body;
    })
    .catch((error) => {
      return error;
    });
};
