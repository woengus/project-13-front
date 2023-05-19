import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isLogged: false,
  user: {
    email: "",
    firstName: "",
    lastName: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getToken: (state, { payload }) => {
      state.token = payload.token;
      state.isLogged = true;
    },
    setProfile: (state, { payload }) => {
      state.user = payload;
      console.log(payload);
    },
  },
});

export const { getToken, setProfile } = userSlice.actions;

export default userSlice.reducer;
